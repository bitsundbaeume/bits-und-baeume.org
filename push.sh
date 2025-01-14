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
while true; do
    output=$(curl -s $URL) # Abrufen der URL
    echo "$output" | tail -n 5 # Zeigt die letzten 5 Zeilen an
    if echo "$output" | grep -q "ended"; then # Prüft auf den String "endede"
        echo "String 'Ended' gefunden. Abbruch."
        break
    fi
    sleep 2 # Intervall von 2 Sekunden
done

