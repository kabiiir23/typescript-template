# Typescript starter

## Install global packages

`npm i -g nodemon typescript ts-node yarn`

## Install local dependencies

`yarn install`

## To run a typescript file

`ts-node file.ts`

## To start main file use in terminal with nodemon

Nodemon watches your file constantly for file changes and restart

`yarn dev`

This command will start src/main/index.ts

## To build/transpile into javascript use

`yarn build:main`

This command will transpile your typescript code in javascript to build/main folder. You can deploy this folder to production.

## To build documentation and open in browser

`yarn doc`
This command will create documentation for your project in build/docs folder and open it in your browser.

`yarn doc:json`
This command will generate json documentation for your typescript project.

More info here: https://typedoc.org/guides/doccomments/

## File tree

# src

All of your codes go into this folder.

- [lib/](./src/lib)  
   This folder should contain your modules/services
- [main/](./src/main)
  - [index.ts](./src/main/index.ts)  
    This is your root file, typically handles your app startup, routing and other functions of your application and does require other modules to add functionality.
- [types/](./src/types)  
  You can put your custom types here
  - [example.d.ts](./src/types/example.d.ts)
- [index.ts](./src/index.ts)
