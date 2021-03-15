# Git Tricks

> Stash track/untrack changes
$ git stash -u or git stash --include-untracked
> Rename local branch
> If you are on the branch you want to rename:
$ git branch -m new-name
> If you are on a different branch:
$ git branch -m old-name new-name
> Delete the old-name remote branch and push the new-name local branch.
$ git push origin old-name new-name
> Reset the upstream branch for the new-name local branch. Switch to the branch and then:
$ git push origin -u new-name
> Add file to the last commit (avoid this if the commit is already public 🙅🏼‍♂️)
$ git add my_missing_file
$ git commit --amend --no-edit
> List all origin from the remote repo
$ git remote prune origin --dry-run
> Prune origin in your local repo
$ git remote prune origin
> Prune when you fetch from a remote
$ git fetch --prune
> List all branches which have been merged
$ git branch --merged
> Prune local branches which have been merged
$ git branch -d branch-to-delete
> List all branches which have been NOT merged
$ git branch --no-merged
> Prune all branches which have been NOT merged
$ git branch -D un-merged-branch-to-delete
> Set config local(folder)
git config user.name "your-user-name"
git config user.email "your-email-addr"