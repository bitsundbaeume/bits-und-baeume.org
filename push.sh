#!/bin/bash

git add --all
#if [ $? -eq 0 ]; then echo "nichts zu tun"; exit; fi
git status
echo "Commitname:"
read beschreibung
git commit -m "$beschreibung"
git push
sleep 5
watch -d -n 2 'curl -s https://bubweb.uber.space/bitbaumweb_build_main.log | tail -n 5'
