.. Genomeplot documentation master file, created by
   sphinx-quickstart on Thu Mar  1 14:07:54 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to Genomeplot!
======================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

`genomeplot` is a simple convenience wrapper to some `bokeh` functions, streamlining the creation of interactive plots across the genome.

It is simple to create a plot for any genome, simply with a genome reference file (FASTA format).

Alternatively, this package contains a few "prerolled" genome plots, that create the base figure using the `GenomePlot()` class.

Creating a custom `genomeplot`
==============================

First, create a new instance of the `GenomePlot` class, check out the documentation.
Once created, to make a plot, a custom function is passed to the `.apply()` method of `GenomePlot`.
This function is then applied in turn to each contig, each making a plot which is placed in the grid.
A convenience dummy function noiseplot_ is available to test GenomePlot instances.

Using a prerolled `genomeplot`
==============================

Instances of `GenomePlot` that are usable for representing genome data of two organisms are currently available.
If you would like to contribute a prerolled GenomePlot, please see contributing_.

.. bokeh-plot:: ../scripts/anophelesgambiae.py
    :source-position: below

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

Some more text.


Contributing
============

Pull Requests for additional organisms and new features are very welcome. See contributing_ for more details.

License and warning
===================

This is academic software, has not been extensively tested, and may contain bugs and/or omissions.
If you find errors or have problems, please raise an issue at https://github.com/hardingnj/genomeplot.
This software (including documentation) is Licensed under the GNU GENERAL PUBLIC LICENSE.


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
