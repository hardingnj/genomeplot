# Custom changes to axes that pertain to genome not data
# eg in this case move left chromosome arm axes to RHS
from genomeplot.genomeplot import GenomePlot
import pkg_resources
import pandas as pd


def load():

    resource_package = __name__
    resource_path = '/'.join(('data', 'plasmodiumfalciparum.txt'))

    path = pkg_resources.resource_filename(resource_package, resource_path)
    df = pd.read_csv(path, index_col=0)

    # drop the mt chrom
    plas_contigs = df.query("length > 10000").index.tolist()

    gf = GenomePlot(path, contigs=plas_contigs, layout_string="ooooo|oooo|ooo|oo")

    # set some parameters default work better with anopheles
    gf.plot_width_per_mb = 100
    gf.major_tick_dist = 5e5
    gf.chrom_label_func = lambda y: " ".join(y.split("_")[:2])

    return gf