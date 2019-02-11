#!/bin/bash

# change directory
echo "######################"
cd ../webapp1
echo "Deploying branch $1"
# checkout to another branch
git pull origin "$1"
git checkout "$1"
git status
pm2 restart server
echo "######################"
echo "######################"