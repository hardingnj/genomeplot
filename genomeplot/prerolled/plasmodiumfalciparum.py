# Custom changes to axes that pertain to genome not data
# eg in this case move left chromosome arm axes to RHS
from genomeplot.genomeplot import GenomePlot
from bokeh.models import LinearAxis
from urllib.request import urlretrieve
import os
import tempfile
import sh
import pyfaidx
from genomeplot.prerolled import util


def load():

    fasta_url = "http://plasmodb.org/common/downloads/release-35/Pfalciparum3D7/fasta/data/PlasmoDB-35_Pfalciparum3D7_Genome.fasta"
    path = os.path.join(tempfile.mkdtemp(), "PlasmoDB-35_Pfalciparum3D7_Genome.fasta.gz")
    fasta_fn, ext = os.path.splitext(path)

    if not os.path.isfile(fasta_fn):
        print("no fasta storage dir specified, download will be required each time.")

        print("Downloading from", fasta_url, "to", fasta_fn)
        urlretrieve(fasta_url, fasta_fn, util.reporthook)
        sh.bgzip(fasta_fn)

    fa = pyfaidx.Fasta(path)
    plas_contigs = sorted(fa.keys())[:14]

    gf = GenomePlot(path, contigs=plas_contigs, layout="ooooo|oooo|ooo|oo")

    # set some parameters default work better with anopheles
    gf.plot_width_per_mb = 100
    gf.major_tick_dist = 5e5
    gf.chrom_label_func = lambda y: " ".join(y.split("_")[:2])

    return gf