#!/bin/sh

if [ -z "$*" ]; then echo "No article name passed."; exit 0; fi

FULLSTR=$(for i in "$*"; do echo "$i"; done);
SLUGIFIED=$(echo $FULLSTR | iconv -t ascii//TRANSLIT | sed -r s/[~\^]+//g | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)
MY_DATE=$(date +'%Y-%m-%d')
echo "---
title: '$FULLSTR'
date: '$MY_DATE'
excerpt: ''
---" > posts/"$SLUGIFIED".mdx

echo "Created posts/"$SLUGIFIED".mdx"