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

    @staticmethod
    def chrom_label_func(y):
        return y

    def __init__(self, reference, contigs=None, layout=None, pfunc=None):

        try:
            self.genome = pyfaidx.Fasta(reference)
        except pyfaidx.FastaIndexingError:
            self.genome = Reference(pd.read_csv(reference, index_col=0))

        if contigs is None:
            self.contigs = list(self.genome.keys())
        else:
            self.contigs = contigs

        # handle layout
        if layout is not None:
            self.layout = self.parse_layout(layout)
        else:
            self.layout = self.auto_layout()

        if pfunc is not None:
            self.pfunc = pfunc

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

    def auto_layout(self):

        # TO DO: Yet to complete.
        for len in self.contigs:
            pass

        return None

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
                                min_border_left=self.min_border_left,
                                min_border_right=self.min_border_right,
                                plot_height=250,
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
