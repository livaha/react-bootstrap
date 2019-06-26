const gulp = require('gulp');
const gutil = require('gulp-util');
const replace = require('gulp-replace');
const argv = require('minimist')(process.argv.slice(2));

const paths = gulp.paths;
//check for reg
const configReg = /'\.\/proconfig\/([\w.-]+)\/router'/g;  
const menuReg = /'\@\/proconfig\/([\w.-]+)\/menuconfig'/g; 
const mainPath = [`${paths.src}/index.js`];
const menuPath = [`${paths.src}/screens/Login/checkLogin.js`];

function configProduct(name) {
  if (name) {
    gulp.appName = name;
  }
  return gulp.src(mainPath)
    .pipe(replace(configReg,  `'./proconfig/${name}/router'`))
    .on('end', () => {
      gutil.log('切换到产品：', gutil.colors.magenta(name));
    })
    .pipe(gulp.dest(paths.src))
}

function configMenu(name) {
    if (name) {
      gulp.appName = name;
    }
    return gulp.src(menuPath)
      .pipe(replace(menuReg,  `'@/proconfig/${name}/menuconfig'`))
      .pipe(gulp.dest(`${paths.src}/screens/Login`));
  }
/**拷贝相应产品的ico */
function copyico(name) {
  const publicPaths = [`${paths.public}/`];
  if (name) {
    gulp.appName = name;
  }
  return gulp.src(`${paths.src}/favicon/${name}/favicon.ico`)
    .pipe(gulp.dest(publicPaths))
}

function changeConfig(name,callback) {
  configProduct(name);
  configMenu(name);
  copyico(name);
  callback();
}
  
gulp.task('config', (callback) => {
  let ret = callback;
  if (argv.pro) {
    ret = changeConfig(argv.pro,callback);
  } else {
    ret = callback();
  }
  return ret;
});