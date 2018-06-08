import genomeplot

from bokeh.io import output_file
from bokeh.models import ColumnDataSource, HoverTool

import allel
import pandas as pd
import os
import h5py


# Function to draw lines given diversity dataframe
def lineplot(contig, subplot, is_left=None, is_bottom=None):

    df = diversity.loc[contig.name]
    source = ColumnDataSource(df)

    hover = HoverTool(
        tooltips=[
            ("Position", "@midpoint{0a.000}"),
            ("pi", "@pi{0a.00}"),
            ("contig", contig.name)],
        mode="mouse")

    subplot.add_tools(hover)

    subplot.line("start", "pi", source=source,
                 color="navy", alpha=1.0)

    if is_left:
        subplot.yaxis[0].axis_label = "\u03A0"
    if is_bottom:
        subplot.xaxis[0].axis_label = "genome position (bp)"


# define release dir on disk
release_dir = "../phase1.AR3"

callset_fn = os.path.join(
    release_dir,
    "variation/main/hdf5/ag1000g.phase1.ar3.pass.h5")

# open hdf5 object
callset = h5py.File(callset_fn, "r")

# read in accessibility data
access_fn = os.path.join(
    release_dir,
    "accessibility/accessibility.h5")
accessibility = h5py.File(access_fn, "r")

# load the prerolled genomeplot instance
f = genomeplot.anophelesgambiae.load()

# load metadata
meta = pd.read_table(
    os.path.join(release_dir, "samples/samples.meta.txt"),
    index_col=0)

# identify Ugandan samples
ugs_samples = meta.query("population == 'UGS'").index

diversity = {}

# loop through contigs to generate diversity frame
for seq in f.contigs:
    gt = allel.GenotypeChunkedArray(
        callset[seq]["calldata/genotype"]).take(
        ugs_samples, axis=1)
    pos = allel.SortedIndex(callset[seq]["variants/POS"])
    accessible = accessibility[seq]["is_accessible"]
    ac = gt.count_alleles()

    pi, windows, bases, counts = allel.stats.windowed_diversity(
        pos, ac, size=100000, is_accessible=accessible)

    diversity[seq] = pd.DataFrame.from_dict(
        {"pi": pi,
         "start": windows.T[0],
         "stop": windows.T[1],
         "nbases": bases,
         "counts": counts})

diversity = pd.concat(diversity)
diversity.index.name = "chrom"
# calculate midpoint
diversity["midpoint"] = diversity[["start", "stop"]].mean(1)

output_file("uganda.html")
x = f.apply(lineplot)
