```
git clone https://github.com/LevDoesCode/binary-studio.git
git remote show origin
git status
git add myfile.txt
git add .
git commit
git commit -m "Your message here"
git branch
git checkout branch-name (switch)
git checkout -b branch-name (create and switch)
git log (exit with q)
git push
git push --set-upstream branch-name or git push -u branch-name (if local branch doesn't exist on remote)
git push origin branch-name
git stash (add changes to stash)
git stash list
git stash pop (rollback changes)
git fetch (download commits, files, branches from remote)
git merge branch-name
git pull (fetch changes from remote and merge together)
git commit --amend

git revert HEAD (create new commit with the inverse of the last commit)
git reset <commit> (clears the commit history until the given commit)

git checkout -b feature/head develop (create a branch feature/head based on develop (tracking))

git branch --set-upstream-to feature/head develop
(manually change which branch to track)
"branch 'develop' set up to track 'feature/head'."
```

# Node
npm init (create a template package.json file)
npm i express (install express in the current root/package.json)
npm install -D eslint (install a package)
rm .\folder-to-del -r -force (windows delete folder and children)
rm .\node_modules -r -force
npm install --production (install only packages needed for production)
npm start (start the project)
node index.js (same as above but selecting the start-up file directly)
npm i (npm install) 
npm install package-name --save-dev (package installation for development only)

npx express-generator --no-view (create a project template)

ECMA script modules enabled for import export
```JSON
{
  "name": "1-template-project",
  "version": "0.0.0",
  "private": true,
  "type": "module",
```
For common `require()` syntax
```JSON
{
  "name": "1-template-project",
  "version": "0.0.0",
  "private": true,
  "type": "commonjs",
```

`SET DEBUG=1-template-project:* & npm start` ???

