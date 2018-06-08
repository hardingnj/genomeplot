.. _gallery:

Gallery
=======

Contains real examples of the use of GenomePlot_.

Nucleotide diversity of *An. gambiae* from Uganda
-------------------------------------------------

In this example we use data from phase 1 (data release AR3) of the *Anopheles gambiae* 1000 Genomes study. 
Full details of the dataset are available here_.

.. raw:: html
   :file: ../scripts/uganda.html

Source code follows. The data mirrors the structure of the FTP site.
scikit-allel_ is used to calculate nucleotide diversity in 100 kbp windows.

.. literalinclude:: ../scripts/uganda.py
   :language: python

.. _GenomePlot: gp
.. _here: http://www.malariagen.net/ag1000g
.. _scikit-allel: http://scikit-allel.readthedocs.io/en/latest/
