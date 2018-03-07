#! /bin/bash
set -e
cd docs/ && make clean && make html 
cd ..
touch docs/_build/html/.nojekyll
cd docs/_build/html && perl -lape '$_ =~ s/\/scripts\/bokeh/scripts\/bokeh/;' index.html > q.html && mv q.html index.html
cd ../../..
./deploy.sh
