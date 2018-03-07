#! /bin/bash
set -e
cd docs/ && make clean && make html 
cd ..
touch docs/_build/html/.nojekyll
./deploy.sh
