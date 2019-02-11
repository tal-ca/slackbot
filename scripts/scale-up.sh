#!/bin/bash

# change directory
cd ../webapp1
echo "######################"
echo "Scaling $1 instance..."
# checkout to another branch
pm2 kill
pm2 start server.js --name webapp -i $1 -f
echo "######################"
echo "######################"