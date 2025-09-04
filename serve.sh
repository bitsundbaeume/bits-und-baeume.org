#!/bin/bash
cd "$(dirname "$0")"
echo "B&B Website wird lokal mit 11ty bereit gestellt:"
echo "################################################"
npx @11ty/eleventy --serve | tee 11ty-latest-serve.log
