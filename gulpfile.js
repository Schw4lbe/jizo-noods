const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");
const flexbugsFixes = require("postcss-flexbugs-fixes");
const normalize = require("postcss-normalize");

function applyAutoprefixer() {
  return gulp
    .src("public/css/main.css")
    .pipe(
      postcss([
        autoprefixer(), // Adds necessary vendor prefixes
        postcssPresetEnv({
          stage: 0, // Enable all modern CSS features
          browsers: "last 2 versions", // Target last 2 versions of browsers
          preserve: true, // keep the original unprocessed CSS
        }),
        flexbugsFixes(), // Fixes known flexbox issues
        normalize(), // Adds normalization rules for consistent cross-browser rendering
        cssnano({
          preset: [
            "default",
            {
              reduceInitial: false, // Avoids removing 'initial' values
              mergeLonghand: false, // Avoids merging properties like `background`
              discardComments: { removeAll: true }, // Removes comments
            },
          ],
        }),
      ])
    )
    .pipe(gulp.dest("public/css"));
}

exports.default = applyAutoprefixer;
