# Custom changes to axes that pertain to genome not data
# eg in this case move left chromosome arm axes to RHS
from genomeplot.genomeplot import GenomePlot
from bokeh.models import LinearAxis
import pkg_resources
import pandas as pd


def load():

    resource_package = __name__
    resource_path = '/'.join(('data', 'homosapiens.txt'))
    path = pkg_resources.resource_filename(resource_package, resource_path)

    gf = GenomePlot(contig_table=path,
                    contigs=pd.read_csv(path, index_col=0).index.tolist(),
                    layout_string="ooo|oooo|ooooo|ooooo|ooooooo")

    gf.plot_width_per_mb = 1
    gf.major_tick_dist = 5e7
    gf.chrom_label_func = lambda y: "chr" + y

    return gf
