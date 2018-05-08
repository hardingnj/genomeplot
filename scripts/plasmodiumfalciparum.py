import genomeplot
from bokeh.plotting import output_file

output_file("example_hs.html")

# First create a GenomePlot instance
pfal = genomeplot.plasmodiumfalciparum.load()

# Pass in a function to the apply method to make a plot
pfal.apply(genomeplot.util.noiseplot, winsize=10000)
