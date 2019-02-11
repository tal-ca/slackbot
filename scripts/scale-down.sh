#!/bin/bash

# change directory
echo "######################"
echo "Stopping $1 instance..."
# checkout to another branch
pm2 stop $1
echo "######################"
echo "######################"