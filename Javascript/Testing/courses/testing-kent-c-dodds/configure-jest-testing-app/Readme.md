# Run Only Relevant Jest Tests on Git Commit to Avoid Breakages

> npm install --save-dev husky lint-staged

```json

"husky": {
    "hooks": {
      "pre-commit": "lint-staged && npm run build"
    }
},
"lint-staged": {
    "**/*.+(js|json|css|html|md)": [
      "prettier",
      "jest --findRelatedTests",
      "git add"
    ]
},

```