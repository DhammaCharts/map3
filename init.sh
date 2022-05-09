#!/usr/bin/env sh

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/REPO-HERE.git
git push -u origin main
