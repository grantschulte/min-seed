import gulp from "gulp";
import babel from "gulp-babel";
import nodemon from "gulp-nodemon";
import eslint from "gulp-eslint";
import livereload from"gulp-livereload";
import { dirs } from "./src/config";

/*****************************************
* SUB TASKS
*****************************************/

/**
* task: babel
*
* Transpiles server javascript to ES2015 and
* outputs to the build folder.
*
*/

gulp.task("babel", () => {
  return gulp.src([
      `${dirs.src.root}/**/*.js`, 
      `!${dirs.src.assets}/**/*.js`
    ])
    .pipe(babel({
      presets: ["env"]
    }))
    .pipe(gulp.dest(dirs.build.server));
});

/**
 * task: pug
 *
 * Copy pug files to the build directoy
 * on change and trigger livereload.
 *
*/

gulp.task("pug", () => {
  return gulp.src(`${dirs.src.views}/**/*.pug`)
    .pipe(gulp.dest(dirs.build.views))
    .pipe(livereload());
});

/**
 * task: public
 *
 * Livereload public files. Compilation and moving
 * of these files is handled by Webpack.
 *
*/

gulp.task("public", () => {
  return gulp.src(`${dirs.build.public}/**`)
    .pipe(livereload());
});

/**
 * task: lint
 *
 * ESLint task, runs when source javascript
 * files are changed and before they're
 * transpiled by babel.
 *
*/

gulp.task("lint", () => {
  return gulp.src(`${dirs.src.root}/**/*.js`)
    .pipe(eslint({
      configFile: "./.eslintrc.json"
    }))
    .pipe(eslint.format());
});

/**
 * task: watch
 *
 * Watches directories for changed files.
 * Watched files are reloaded with livereload.
 *
*/

gulp.task("watch", () => {
  livereload.listen();
  gulp.watch(`${dirs.src.views}/**/*.pug`, ["pug"]);
  gulp.watch(`${dirs.src.root}/**/*.js`, ["lint", "babel"]);
  gulp.watch(`${dirs.build.public}/**`, ["public"]);
});

/**
 * task: server
 *
 * Runs the development server with nodemon for
 * automatically restarting the express server.
 *
*/

gulp.task("server", () => {
  nodemon({
    "script": `${dirs.build.server}/server.js`,
    "ignore": [
      dirs.build.server,
      dirs.build.public,
      dirs.src.assets,
      dirs.test
    ]
  });
});

/*****************************************
* RUN TASKS
*****************************************/

/**
 * task: serve
 *
 * Runs the express server and the watch
 * task for livereloading.
 *
*/

gulp.task("serve", [
  "server",
  "watch"
]);

/**
 * task: build
 *
 * Transpiles the server javascript with
 * babel into the dist directory and moves
 * the pug views over to dist.
 *
*/

gulp.task("build", [
  "babel",
  "pug"
]);
