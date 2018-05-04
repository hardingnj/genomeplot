import sys
from bokeh.models import ColumnDataSource, HoverTool
import numpy as np
import pandas as pd


def noiseplot(contig, subplot, is_left=None, is_bottom=None, winsize=100000, show_xlab=False):

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
    if is_bottom and show_xlab:
        subplot.xaxis[0].axis_label = "genome position (bp)"


def sineplot(contig, subplot, is_left=None, is_bottom=None, mb_per_wave=None, show_xlab=False):

    clen = len(contig)
    starts = np.linspace(0, clen, 300)

    if mb_per_wave is None:
        mb_per_wave = (clen*1e-6) // 5

    x = np.arange(len(starts))
    f = clen // (mb_per_wave * 1e6)

    y = [np.sin(2 * np.pi * f * (i / len(starts))) for i in x]

    df = pd.DataFrame.from_dict({"start": starts, "y": y})

    source = ColumnDataSource(df)

    hover = HoverTool(
        tooltips=[
            ("Position", "@start{0a.000}"),
            ("y", "$y"),
            ("contig", contig.name)],
        mode="mouse")

    subplot.add_tools(hover)

    subplot.line("start", "y", source=source, color="navy", alpha=0.5)

    if is_left:
        subplot.yaxis[0].axis_label = "y"
    if is_bottom & show_xlab:
        subplot.xaxis[0].axis_label = "genome position (bp)"

