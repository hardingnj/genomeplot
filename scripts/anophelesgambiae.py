import genomeplot
from bokeh.plotting import output_file

output_file("example_ag.html")

# First create a GenomePlot instance
agam = genomeplot.anophelesgambiae.load()

# Pass in a function to the apply method to make a plot
agam.apply(genomeplot.util.noiseplot)
