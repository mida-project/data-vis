#!/bin/sh
###########################
# switch to branch you want to use
git checkout master
# add all added/modified files
git add --all
# commit changes
git commit -a -m "Auto Changes: `date +%F-%T`"
# push to git remote repository
git push https://mimbcdui:!MIMBCD-ui2015@github.com/mida-project/data-vis.git master
###########################
