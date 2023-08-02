Creating a new branch and safely navigating back to the main branch to create a new branch.

1. git add .
2. git commit -m "comment about commit"
3. git branch the_branches_name
4. git checkout main

Moving from one branch to another branch
eg. You want to see the part2 branch

1. git checkout part2

Adding to an existing branch, assuming that you aren't on that branch currently, AND pushing to GitHub

1. git checkout part2
2. git add .
3. git commit -m "this is a comment"
4. git push origin part2