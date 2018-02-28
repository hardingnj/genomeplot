# Custom changes to axes that pertain to genome not data
# eg in this case move left chromosome arm axes to RHS
from genomeplot.genomeplot import GenomePlot
from bokeh.models import LinearAxis
from urllib.request import urlretrieve
import os
import tempfile
import sh
from genomeplot.prerolled import util

def load():

    def anopheles_plot(chrom, subplot):
        if chrom.endswith("L"):
            subplot.yaxis.visible = False
            subplot.add_layout(LinearAxis(), 'right')

    fasta_url = "https://www.vectorbase.org/download/anopheles-gambiae-pestchromosomesagamp4fagz"
    path = os.path.join(tempfile.mkdtemp(), "Anopheles-gambiae-PEST_CHROMOSOMES_AgamP4.fa.gz")

    if not os.path.isfile(path):
        print("no fasta storage dir specified, download will be required each time.")
        print("Downloading from", fasta_url, "to", path)
        urlretrieve(fasta_url, path, util.reporthook)
        fasta_fn, ext = os.path.splitext(path)
        sh.gunzip(path)
        sh.bgzip(fasta_fn)

    gf = GenomePlot(fasta=path,                              # filepath to fasta
                    contigs=("2R", "2L", "3R", "3L", "X"),   # contigs to display in order
                    layout="oo|ooo",                         # layout string
                    pfunc=anopheles_plot)                    # custom layout function

    return gf