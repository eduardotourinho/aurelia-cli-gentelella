# Aurelia-cli Gentelella

This is a skeleton project using the [aurelia cli](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjDgceap4rRAhVBhZAKHcWmA7oQFggaMAA&url=https%3A%2F%2Fgithub.com%2Faurelia%2Fcli&usg=AFQjCNGP0cHs-884gWtZKmhpo_agVQkIxg&bvm=bv.142059868,d.Y2I) build system merged with [Aurelia skeleton project](https://github.com/aurelia/skeleton-navigation) and [gentelella](https://github.com/puikinsh/gentelella) bootstrap admin template 

It does not currently have support for all the pages of existing gentelella, and some of the javascript tools (like pie charts) needed for dashboard controls have not yet been incorporated in project. 

## Getting started

Before you start, make sure you have a recent version of [NodeJS](http://nodejs.org/) environment *>=4.0* with NPM 3.

From the project folder, execute the following commands:

```shell
npm install
```
You must install the aurelia cli globally to buil the project. 

To run the app execute the following command:

```shell
au run [--watch] [--env (dev|prod|stage)]
```

This command starts the server that serves the build bundles.
You can now browse the skeleton app at http://localhost:9000. Changes in the code
will automatically build and reload the app if you'll run with the --watch flag.

## Features

### Bootstrap

It uses the [Bootstrap-sass](https://github.com/twbs/bootstrap-sass). The scss files resides on project src, so you can change the bootstrap theme at your will. It will be bundled into the project's main css.

### Assets

Files that do not need be transpiled/processed resides on the assets folder inside the src directory. Those **will not** be bundled and will be copied to the output directory (default /scripts).

## Running The Unit Tests

To run the unit tests:

```shell
npm run test
```
