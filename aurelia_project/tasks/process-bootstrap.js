import gulp from "gulp";
import changedInPlace from "gulp-changed-in-place";
import project from "../aurelia.json";

export default function processBootstrap() {
  const source = 'node_modules/bootstrap-sass/assets';

  const taskFonts = gulp.src(`${source}/fonts/*`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}/fonts`));

  return taskFonts;
}
