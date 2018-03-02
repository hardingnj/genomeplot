.. Genomeplot documentation master file, created by
   sphinx-quickstart on Thu Mar  1 14:07:54 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to Genomeplot's documentation!
======================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

`genomeplot` is a simple convenience wrapper to `bokeh`, that allows the creation of interactive plots across the genome.
The package contains a few "prerolled" genome plots, that create the base figure using the `GenomePlot()` class.

.. bokeh-plot:: ../scripts/anophelesgambiae.py

Or with the other prerolled GenomePlot:

.. bokeh-plot::
    :source-position: above

    from bokeh.plotting import figure, output_file, show

    output_file("example.html")

    x = [1, 2, 3, 4, 5]
    y = [6, 7, 6, 4, 5]

    p = figure(title="example", plot_width=300, plot_height=300)
    p.line(x, y, line_width=2)
    p.circle(x, y, size=10, fill_color="white")

    show(p)

Palette

.. bokeh-palette-group:: mpl

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
