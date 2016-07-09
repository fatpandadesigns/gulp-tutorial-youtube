var gulp = require('gulp');
var uglify = require('gulp-uglify');
// gulp.task("default", ["myGulp"], function() {
//     console.log("That's a big GULP!!!");
// });

gulp.task('scripts', function () {
  gulp.src('src/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});
