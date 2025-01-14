#!/bin/bash
URL="https://bubweb.uber.space/bitbaumweb_build_main.log"

git add --all
#if [ $? -eq 0 ]; then echo "nichts zu tun"; exit; fi
git status
echo "Commitname:"
read beschreibung
git commit -m "$beschreibung"
sleep
git push
sleep 5
watch -d -n 2 'curl -s $URL | tail -n 5'
