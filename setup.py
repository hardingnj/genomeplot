from distutils.core import setup

setup(name='genomeplot',
      version='0.2',
      packages=['genomeplot', 'genomeplot.prerolled'],
      package_data={'genomeplot.prerolled': ['data/*.txt']},
      )
