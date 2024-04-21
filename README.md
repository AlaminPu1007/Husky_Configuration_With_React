## This project about to integrate husky in a react application

This process involved, how you can integrate .husky in you existing react application.

## Prerequisites

-   Node.js
-   npm
-   git (must be initialized a .git in you application)

## Initialize a project

1. First create a project using vite

```
  npm create  vite@latest
```

and choose your project name and choose react as a framework, then install the dependencies

```
  npm install
```

2. Procedure to install husky

```
npx husky-init && npm install
npm install --save-dev --save-exact prettier (This flag tells npm to save the exact version of the package)
```

3. create .prettierrc & .prettierignore in root (if you are on the windows machine then follow the step below)

```
echo {} > .prettierrc
echo node_modules/ > .prettierignore
```

4. Edit your packages.json file

```
"scripts": {
    "lint": "prettier --check .", // if it's already present in your script, then avoid it
    "format": "prettier --write ."
},
```

5. Add a pre-commit script in `.hysky/pre-commit` file. (It will automatically format our code whenever we commit our changes in git)

```
npm run format && git add -A .
```
