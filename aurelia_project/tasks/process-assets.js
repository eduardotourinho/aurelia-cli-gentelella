import gulp from "gulp";
import changedInPlace from "gulp-changed-in-place";
import project from "../aurelia.json";

export default function processAssets() {

  return gulp.src(`${project.paths.assets}/**/*`)
    .pipe(changedInPlace({firstPass: true}))
    .pipe(gulp.dest(`${project.platform.output}`));
}

