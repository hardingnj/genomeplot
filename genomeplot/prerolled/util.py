import sys
from bokeh.models import ColumnDataSource, HoverTool
import numpy as np
import pandas as pd

def reporthook(blocknum, blocksize, totalsize):

    readsofar = blocknum * blocksize

    if totalsize > 0:
        percent = readsofar * 1e2 / totalsize
        s = "\r%5.1f%% %*d / %d kb" % (
            percent, len(str(totalsize)), readsofar / 1024, totalsize / 1024)
        sys.stderr.write(s)
        if readsofar >= totalsize: # near the end
            sys.stderr.write("\n")
    else: # total size is unknown
        sys.stderr.write("read %d\n" % (readsofar,))


def noiseplot(contig, subplot, is_left=None, is_bottom=None, winsize=100000):

    # encouraged to precompute statistics and store in dict. This is a simple minimal example.

    clen = len(contig)
    starts = np.arange(0, clen, winsize)
    stops = starts + winsize
    y = np.random.random(starts.size)
    df = pd.DataFrame.from_dict({"start": starts, "stop": stops, "y": y})

    source = ColumnDataSource(df)

    hover = HoverTool(
        tooltips=[
            ("Position", "@start{0a.000}-@stop{0a.000}"),
            ("y", "$y"),
            ("contig", contig.name)],
        mode="mouse")

    subplot.add_tools(hover)

    subplot.circle("start", "y", source=source, color="navy", alpha=0.5)

    if is_left:
        subplot.yaxis[0].axis_label = "y"
    if is_bottom:
        subplot.xaxis[0].axis_label = "genome position (bp)"