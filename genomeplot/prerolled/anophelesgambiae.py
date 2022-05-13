# Custom changes to axes that pertain to genome not data
# eg in this case move left chromosome arm axes to RHS
from genomeplot.genomeplot import GenomePlot
from bokeh.models import LinearAxis
import pkg_resources


def load():

    def anopheles_plot(contig, subplot):
        if contig.endswith("L"):
            subplot.yaxis.visible = False
            subplot.add_layout(LinearAxis(), 'right')

    resource_package = __name__
    resource_path = '/'.join(('data', 'anophelesgambiae.txt'))

    path = pkg_resources.resource_filename(resource_package, resource_path)

    gf = GenomePlot(contig_table=path,
                    contigs=("2R", "2L", "3R", "3L", "X"),  # contigs to display in order
                    layout_string="oo|ooo",  # layout string
                    pfunc=anopheles_plot)                   # custom layout function

    return gf
