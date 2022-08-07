const {
    src,
    dest,
    watch,
    series,
} = require('gulp');
var sass = require('gulp-sass')(require('sass'));

var cssDest = 'style';
var cssInputFile = 'source/style.scss';
var watchedFiles = 'source/**/*.scss';

function styleTask(){
	return src(cssInputFile)
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(dest(cssDest));
};

function watchTask(){
	watch(watchedFiles, styleTask);
}

exports.default = series(
    styleTask,
    watchTask
)