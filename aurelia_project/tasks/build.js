import gulp from "gulp";
import transpile from "./transpile";
import processMarkup from "./process-markup";
import processCSS from "./process-css";
import processBootstrap from "./process-bootstrap";
import processFontAwesome from "./process-font-awesome";
import processAssets from "./process-assets";
import {build} from "aurelia-cli";
import project from "../aurelia.json";

export default gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS,
    processBootstrap,
    processFontAwesome,
    processAssets
  ),
  writeBundles
);

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}
