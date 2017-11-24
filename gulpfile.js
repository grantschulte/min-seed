const gulp = require("gulp");
const babel = require("gulp-babel");
const nodemon = require("gulp-nodemon");
const eslint = require("gulp-eslint");
const livereload = require("gulp-livereload");
const dest = require("gulp-dest");

gulp.task("babel", () => {
  return gulp.src("./src/**/*.js")
    .pipe(babel({
      presets: ["env"]
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("pug", () => {
  return gulp.src("./src/views/**/*.pug")
    .pipe(gulp.dest("./dist/views"))
    .pipe(livereload());
});

gulp.task("public", () => {
  return gulp.src("./public/**")
    .pipe(livereload());
});

gulp.task("lint", () => {
  return gulp.src("./src/**/*.js")
    .pipe(eslint({
      configFile: "./.eslintrc.json"
    }))
    .pipe(eslint.format());
});

gulp.task("watch", () => {
  livereload.listen();
  gulp.watch("./src/views/**/*.pug", ["pug"]);
  gulp.watch("./src/**/*.js", ["lint", "babel"]);
  gulp.watch("./public/**", ["public"]);
});

gulp.task("server", () => {
  nodemon({
    "script": "./dist/server.js",
    "ignore": ["./dist", "./test", "./public", "./src/assets"]
  });
});

gulp.task("serve", [
  "server",
  "watch"
]);

gulp.task("build", [
  "babel",
  "pug"
]);
