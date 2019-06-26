const gulp = require('gulp');
const gutil = require('gulp-util');
const exec = require('child_process').exec;

/**gulp start
 * 切换到要启动的项目
 * 启动服务器 yarn server
 * 启动浏览器 yarn start
 */
gulp.task('server',function(cb) {
  gutil.log(gutil.colors.green('正在启动json-server...'));
  exec('node tools/mock/server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('start',function(cb) {
  gutil.log(gutil.colors.green('正在启动浏览器...'));
  exec('node scripts/start.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('dev:server', gulp.parallel('server','start'))

gulp.task('build',function(cb) {
  gutil.log(gutil.colors.green('正在编译...'));
  exec('node scripts/build.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});



