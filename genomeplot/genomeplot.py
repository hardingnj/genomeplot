from bokeh.plotting import figure, output_notebook, show, gridplot
from bokeh.models.tickers import FixedTicker
from bokeh.models import NumeralTickFormatter, Range1d, LinearAxis, ColumnDataSource, HoverTool

import pyfaidx
import numpy as np
import pandas as pd
from collections import OrderedDict


class Seq:

    def __init__(self, name, n):
        self.name = name
        self.length = n

    def __len__(self):
        return self.length


class Reference:
    qq = OrderedDict()

    def __init__(self, od):
        for k, v in od.length.iteritems():
            self.qq[k] = Seq(k, v)

    def __getitem__(self, arg):
        return self.qq[arg]


class GenomePlot:

    genome = None
    contigs = None
    tools = "pan,wheel_zoom,box_zoom,save,reset"
    layout = None
    pfunc = None
    min_border_left = 50
    min_border_right = 10
    major_tick_dist = 1e7
    plot_width_per_mb = 6
    nrows = None
    figheight = 200
    min_contig_size = 1000000
    min_rows = 2
    max_rows = 5

    @staticmethod
    def chrom_label_func(y):
        return y

    def __init__(self, reference, contigs=None, layout=None, pfunc=None, nrows=None, min_contig_size=None, min_rows=2, max_rows=6):

        try:
            self.genome = pyfaidx.Fasta(reference)
        except pyfaidx.FastaIndexingError:
            self.genome = Reference(pd.read_csv(reference, index_col=0))

        if min_contig_size is not None:
            self.min_contig_size = min_contig_size

        if contigs is None:
            self.contigs = [c for c in self.genome.keys() if len(self.genome[c]) > self.min_contig_size]
        else:
            self.contigs = contigs

        if pfunc is not None:
            self.pfunc = pfunc

        if nrows is not None:
            print(nrows)
            self.nrows = nrows

        if min_rows is not None:
            self.min_rows = min_rows

        if max_rows is not None:
            self.max_rows = max_rows

        # handle layout
        if layout is not None:
            self.layout = self.parse_layout(layout)
        else:
            self.layout = self.auto_layout()

    def parse_layout(self, lstring):
        layout = list()
        assert type(lstring) == str, "layout must be a string"
        q = list(self.contigs)
        q.reverse()

        rows = lstring.split("|")
        for row in rows:
            r = list()
            for x in row:
                assert x in "ox.", "Only chars o, x, . are allowed"
                if x == ".":
                    r.append(None)
                else:
                    r.append(q.pop())
            layout.append(r)
        return layout

    @staticmethod
    def eval_layout(nrows, widths, xspace):

        tot_len = widths.sum()

        per_row = tot_len / nrows

        row_x = 0
        penalty = 0
        layout_str = ""

        for w in widths:
            if (row_x + w - xspace) > per_row:
                # definitely start a new row.
                layout_str += "|"
                penalty += (per_row - row_x)
                row_x = 0
            else:
                row_x += w

            layout_str += "o"

        # and last gap.
        penalty += (per_row - row_x)**2

        # does switching the either or both of the last plots to next row improve the fit?
        return penalty, layout_str

    def auto_layout(self, space=20):

        contig_lengths = pd.Series([len(self.genome[c]) for c in self.contigs], index=self.contigs, name="length")

        horz_space = contig_lengths.apply(
            lambda y: y * self.plot_width_per_mb * 1e-6 + self.min_border_left + self.min_border_right + space)

        if self.nrows is None:
            evals = [self.eval_layout(ix, horz_space, xspace=space)
                     for ix in range(self.min_rows, self.max_rows + 1)]
            scores = [x[0] for x in evals]
            print(scores)
            best_ix = np.argmin([x[0] for x in evals])
            layout_str = evals[best_ix][1]
        else:
            _, layout_str = self.eval_layout(self.nrows, horz_space, xspace=space)

        return self.parse_layout(layout_str)

    def apply(self, func, **kwargs):

        # create a figure with specified layout
        d = [[] for _ in range(len(self.layout))]

        for i, row in enumerate(self.layout):

            is_bottom = ((i + 1) == len(self.layout))

            for j, seqid in enumerate(row):

                is_left = (j == 0)

                if seqid is not None:

                    contig_size = len(self.genome[seqid])
                    px = int(contig_size * 1e-6 * self.plot_width_per_mb)
                    px += self.min_border_left
                    px += self.min_border_right

                    try:
                        yrange = s1.y_range
                    except NameError:
                        yrange = None

                    s1 = figure(width=px,
                                plot_height=self.figheight,
                                min_border_left=self.min_border_left,
                                min_border_right=self.min_border_right,
                                tools=self.tools,
                                title=self.chrom_label_func(seqid),
                                y_range=yrange,
                                x_range=(1, contig_size))

                    s1.xaxis.ticker = FixedTicker(
                        ticks=np.arange(0, contig_size, self.major_tick_dist))
                    s1.xaxis[0].formatter = NumeralTickFormatter(format="0a.0")

                    # handle general plot things specific to genome not data
                    if self.pfunc is not None:
                        self.pfunc(seqid, s1)

                    # function lives here
                    func(self.genome[seqid], s1, is_left=is_left, is_bottom=is_bottom, **kwargs)
                    d[i].append(s1)

                else:
                    d[i].append(None)

        # put the subplots in a grid plot
        p = gridplot(d, toolbar_location="left", sizing_mode='fixed', plot_width=None)

        show(p)
