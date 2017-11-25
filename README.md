min-seed
========

A minimal Node web app starter with Express, Webpack, and Gulp.

# Table of Contents
[Features](#features)  
[Setup](#setup)  
[Develop](#develop)  
[Build](#build)  
[Test](#test)  
[Directory Structure](#directory-structure)

# Features
- All code written using ES6 including server and client javascript, webpack configuration, and gulpfile.
- Client framework agnostic (Vue or React would be easy additions).
- Database agnostic (Mongo, Postgres, Sequelize, Mongoose, and/or Redis could be easily added).
- Server javascript is transpiled on save using `gulp-babel`.
- Server listening and restarting with `nodemon`.
- Assets bundled, copied, or compressed with Webpack:
  - SASS compiled and minimized on save with Webpack.
  - Client javascript minified and compressed using Webpack & Uglify.
  - Image compression using Webpack & Imagemin.
- Browser live reloading when server of client changes.
- Lint on save with ESLint.
- Server-side templates with Pug.
- Helpful npm scripts.

# Setup
## Engine and Package Versions
Node 8.9.0 (Current LTS)  
NPM 5.5.1  
Express 4.16.2  
Webpack 3.8.1  
Gulp 3.9.1  
Yarn 1.3.2  

## Dependencies
### Node
This starter is dependent upon Node.

Node version 8.9.0 and NPM version 5.5.1 are preferable. I recommend [Node Version Manager](https://github.com/creationix/nvm) for managing Node versions. If you have NVM you can run `nvm use` to source the proper version from the included **.nvmrc**

### Yarn (optional)
The NPM scripts in this starter are dependent upon Yarn. Install using Brew if you're on a mac or [install a different way](https://yarnpkg.com/en/docs/install).

*Yarn is faster and makes script running easier with it's terse CLI syntax. Technically, you don't have to use it. If you want to use `npm` you can change the NPM script commands in **package.json** to use `npm run` rather than `yarn`.*

### LiveReload (optional)
To enable live reloading in your browser when the server and/or asset files change, download the [Chrome LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) plugin.

## Develop

To begin development, clone the project and install the dependencies:

```
yarn```

Run serve:dev to watch and and restart the server automatically:

```
yarn serve:dev```

Run webpack:watch to watch and process assets:

```
yarn webpack:watch```

## Build

To build the server and assets on a production server run:

```
yarn build```

Then run the production server:

```
yarn serve:prod```

## Directory Structure
```
.
├──bin
│   └──www
├──src
│   ├──assets
│   ├──controllers
│   ├──middleware
│   ├──routes
│   ├──utils
│   └──views
└──test
    └──unit
```
