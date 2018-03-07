#! /bin/bash
set -e
cd docs/ && make clean && make html 
cd ..
./deploy.sh
