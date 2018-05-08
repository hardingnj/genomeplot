.. Genomeplot documentation master file, created by
   sphinx-quickstart on Thu Mar  1 14:07:54 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

======================
Welcome to Genomeplot!
======================

.. toctree::
   :maxdepth: 2
   :hidden:

   gp
   gallery
   contributing
   util/util

``genomeplot`` is a simple convenience wrapper to some bokeh_ functions, streamlining the creation of interactive plots across the genome.

It is simple to create a plot for any genome, all you need is a genome reference file (FASTA_ format).

Alternatively, this package contains a few "prerolled" genome plots, that create the base figure using the :class:`genomeplot.GenomePlot` class.

Using a prerolled `genomeplot`
------------------------------

Instances of ``GenomePlot`` representing the genome of three organisms are currently available: `Anopheles gambiae`, `Plasmodium falciparum`, and `Homo Sapiens`.
If you would like to contribute a prerolled ``GenomePlot``, please see :ref:`contributing`.
The :class:`genomeplot.GenomePlot` instance is created using the ``.load()`` method. Parameters may still be edited by directly setting the values in the class.
A convenience dummy function :func:`genomeplot.prerolled.util.noiseplot` is available to demonstrate ``GenomePlot`` instances.

.. bokeh-plot:: ../scripts/anophelesgambiae.py
    :source-position: above

.. bokeh-plot:: ../scripts/plasmodiumfalciparum.py
    :source-position: above

In this `Homo Sapiens` example, we use another dummy plot function, :func:`genomeplot.prerolled.util.sineplot`, it simply plots a sine curve over each contig.

.. bokeh-plot:: ../scripts/homosapiens.py
    :source-position: above


Creating a custom `genomeplot`
------------------------------

First, create a new instance of the :class:`genomeplot.GenomePlot` class. The only required argument is a filepath describing the contigs present in the reference genome.
This is typically a FASTA_, or alternatively a ``csv`` file, meeting the requirements described here. 

Below is a simple example for a generic ``GenomePlot``::

    import genomeplot
    
    fasta_path = "/path/to/fastafile.fa.gz"
    contigs = ["1", "2", "3", "4", "5", "6", "7", "8", "X"]
    gf = GenomePlot(fasta_path, contigs=contigs, layout="oo|ooo|oooo")

Once instantiated, to make a plot, a plot function is passed to the ``.apply()`` method of :class:`genomeplot.GenomePlot`.
This function is then applied in turn to each contig, each making a plot which is placed in the grid.

	gf.apply(genomeplot.util.noiseplot)
    
This function simply places a circle with a random ``y`` value at intervals over the genome.
Initially it is recommended that noiseplot is used as a template.
More detailed instructions to creating plotting functions suitable for use with ``GenomePlot.apply()`` will be available soon.
More complex examples of use will also be made available in the :ref:`gallery`.

Source
------

Source code is hosted on GitHub at https://github.com/hardingnj/genomeplot.

Installation
------------

This package isn't yet stable/mature enough to be put in ``conda``/``pypi``, so for the moment please install by either cloning the repo, or downloading the ``.tar.gz`` from the master branch and extracting. 

Then run::

    python setup.py install

Requirements
------------

::
    bokeh >= 0.12.14
    python >= 3.5

Contributing
------------

Pull requests for additional organisms and new features are very welcome. See :ref:`contributing` for more details.

License and warning
-------------------

This is academic software, has not been extensively tested, and may contain bugs and/or omissions.
If you find errors or have problems, please raise an issue at https://github.com/hardingnj/genomeplot/issues.
This software (including documentation) is licensed under the GNU GENERAL PUBLIC LICENSE.

Acknowledgements
----------------

Much of this code is heavily based on matplotlib_ code written by `Alistair Miles <https://github.com/alimanfoo>`_

Indices and tables
------------------

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

.. _bokeh: https://bokeh.pydata.org/en/latest/
.. _FASTA: http://genetics.bwh.harvard.edu/pph/FASTA.html
.. _GenomePlot: :class:`genomeplot.GenomePlot`
.. _matplotlib: https://matplotlib.org
