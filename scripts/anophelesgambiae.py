import genomeplot
from bokeh.plotting import output_file

output_file("example_ag.html")

# First create a GenomePlot instance
gf = genomeplot.anophelesgambiae.load()

# Pass in a function to the apply method to make a plot
gf.apply(genomeplot.util.noiseplot)
