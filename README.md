#Usage of gulp-hash-filename
####Example of the hash() function
Here is an example of how to use the hash() function in your gulpfile.js file:
```
const gulp = require('gulp');
const hash = require('gulp-sha256-filename');
 
gulp.task('assemble', function() {
  return gulp.src('./assembly.json')
    .pipe(hash())
    .pipe(gulp.dest('./dist'))
});
```