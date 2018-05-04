import genomeplot
from bokeh.plotting import output_file

output_file("example_hs.html")

# First create a GenomePlot instance
gf = genomeplot.homosapiens.load()

# Pass in a function to the apply method to make a plot
gf.apply(genomeplot.util.sineplot, mb_per_wave=30)
