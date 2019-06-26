const gulp = require('gulp');
const gutil = require('gulp-util');
// If you just want to run a command, just run the command, don't use this plugin:
// plugin: gulp-exec 
const paths = {
  build: 'build',
  src: 'src',
  public:'public'
}

gulp.paths = paths;

require('./tools/gulp/config');
require('./tools/gulp/build');

gulp.task('default', async() => {
  gutil.log(gutil.colors.green('先切换到产品目录:gulp config --pro [productname]'));
  gutil.log(gutil.colors.green('编译代码:gulp build'));
  gutil.log(gutil.colors.green('启动web:gulp dev:server'));
  gutil.log(gutil.colors.yellow('\nproductname：\
  \n主：ME1202-DT01\
  \n从：ME1202-DL01'));
  await console.log('You will be better!');
});