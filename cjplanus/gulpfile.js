// plug-in 연결
const gulp = require("gulp"); 
const Fiber = require('fibers');
const dartSass = require('dart-sass');
const scss = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps'); 
const minificss = require('gulp-minify-css'); 
const autoprefixer = require('autoprefixer'); 
const postCss = require('gulp-postcss');
const rename = require('gulp-rename');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync'); 
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');

const cacheBuster = require('gulp-cache-bust');
const imagemin = require('gulp-imagemin');

const hash = require('gulp-hash');
const ejs = require('gulp-ejs');
const nunjucksRender = require("gulp-nunjucks-render")
const through2 = require("through2");
const pretty = require('gulp-pretty');
const prettyHtml = require('gulp-pretty-html');;

const del            = require('del');
const dependents     = require('gulp-dependents'); 
const cached         = require('gulp-cached'); 
const path           = require('path');
const plumber        = require('gulp-plumber');

const flatten = require('gulp-flatten');


// autoprefixer 옵션: 브라우저 버전 지정
const apfBrwsowsers = [
  'ie > 0', 'chrome > 0', 'firefox > 0'
  //'last 2 versions'
];

// 기타 설정
const onErrorHandler = (error) => console.log(error); 

const data = require('gulp-data');
const fs = require('fs');
const swig = require('gulp-swig');
const jade = require('gulp-jade');

// 소스 파일 경로
const src = './src';
const dist = './dist';
const assets = '/assets';
// 작업폴더 경로 ('src'에서 작업한 것을)
const PATH = {
  HTML: src + '/html',
  JSONFILE: src + '/html/_data/_data.json',
  ASSETS: {
    CSS: src + assets + '/css',
    FONTS: src + assets + '/fonts',
    IMAGES: src + assets + '/images',
    JS: src + assets + '/js'
  }
}
// 산출물 경로 ('dist'에 생성한다.)
const DEST_PATH = {
  HTML: dist,
  ASSETS: {
    CSS: dist + '/css',
    FONTS: dist + '/fonts',
    IMAGES: dist + '/images',
    JS: dist + '/js'
  }
};

// scss 컴파일
gulp.task('scss:compile', () => {
  return new Promise(resolve => {
    const options = {
      //scss 옵션 정의
      scss : {
        outputStyle: "expanded",
        indentType: "space",
        indentWidth: 2, 
        precision: 8, 
        sourceComments: true,
        compiler: dartSass,
        fiber: Fiber,
      },
      postcss: [ autoprefixer({
        overrideBrowserslist: apfBrwsowsers,
      }) ]
    };
    // gulp.src( PATH.ASSETS.CSS + '/*.scss', { sourcemaps: true } ) 
    gulp.src(
        PATH.ASSETS.CSS + '/*.scss', 
        { since: gulp.lastRun('scss:compile') } 
      )
      .pipe( plumber({errorHandler:onErrorHandler}) )
      // *.css 생성
      .pipe( dependents() ) 
      .pipe( sourcemaps.init() ) 
      .pipe( scss(options.scss).on('error', scss.logError) )
      .pipe( postCss(options.postcss) ) 
      .pipe( sourcemaps.write() ) 
      .pipe( gulp.dest(DEST_PATH.ASSETS.CSS) ) 
      .pipe( browserSync.reload({stream: true}) )  
      // *.min.css 생성
      .pipe( minificss() ) 
      .pipe( rename({ suffix: '.min'}) ) 
      // .pipe( sourcemaps.write() ) 
      // .pipe( gulp.dest(DEST_PATH.ASSETS.CSS), { sourcemaps: true } ) 
      .pipe( gulp.dest(DEST_PATH.ASSETS.CSS) )  
      .pipe( browserSync.reload({stream: true}) ); 
    resolve();
  });
});

// html 빌드
gulp.task('html', () => {
  return new Promise(resolve => {
    const manageEnvironment = (environment) => {
      environment.addFilter('tabIndent', function(str, numOfIndents, firstLine) {
        str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('\t'));
        if(!firstLine) {
          str = str.replace(/^\s+/,"");
        }
        return str;
      });
    };
    const config = JSON.parse(fs.readFileSync(src + '/html/_data/_config.json'));
    const meta = JSON.parse(fs.readFileSync(src + '/html/_data/_meta.json'));
    const ukdata = JSON.parse(fs.readFileSync(src + '/html/_data/_data.json'));
    const ukguide = JSON.parse(fs.readFileSync(src + '/html/_data/_guide.json'));
    const uktest = JSON.parse(fs.readFileSync(src + '/html/_data/_test.json'));
    const sitedata = {...config, ...meta, ...ukdata, ...ukguide, ...uktest};
    const getDataForFile = file => {
      sitedata.path.relative = file.relative.replace(/\.njk/, '\.html').replace(/index\.html/, '').replace(/\\/g, '/');
      sitedata.path.absolute = sitedata.path.domain + sitedata.path.relative;
      return sitedata;
    };
    delete require.cache[require.resolve(
      src + '/html/_data/_config.json',
      src + '/html/_data/_meta.json',
      src + '/html/_data/_data.json',
      src + '/html/_data/_guide.json',
      src + '/html/_data/_test.json'
    )];
    gulp.src([
      PATH.HTML + '/**/*',
      '!' + PATH.HTML + '/**/_*',
      '!' + PATH.HTML + '/**/_*/**/*',
      ])
      .pipe( plumber({errorHandler:onErrorHandler}) )
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file',
        indent : true 
      }))

      /* .pipe( data( () => {
        return JSON.parse(fs.readFileSync(PATH.JSONFILE));
      })) */
      .pipe(data(getDataForFile))
      
      // .pipe( htmlmin({collapseWhitespace: true, removeComments: true}) )
      .pipe 
        (nunjucksRender({ 
          manageEnv: manageEnvironment,
          path: [PATH.HTML + '/_templates'],
          data: sitedata,
          envOptions: {
            autoescape: false
          }
        }) 
      ).on('error', (e) =>  {
        console.log(e);
        this.emit('end');
      })
      
      .pipe( cached('html') )
      .pipe( gulp.dest(DEST_PATH.HTML) ) 
      .pipe( browserSync.reload({stream: true}) ); 
    resolve();
  });
});

gulp.task('js', () => {
  return new Promise(resolve => {
    gulp.src([
      PATH.ASSETS.JS + '/**/*/**/*.js'
    ])
    .pipe( plumber({errorHandler:onErrorHandler}) )
    .pipe( cached('js') )
    .pipe( gulp.dest(DEST_PATH.ASSETS.JS) );
    resolve();
  });
});

gulp.task('imagemin', () => {
  return new Promise(resolve => {
    gulp.src([
      PATH.ASSETS.IMAGES + '/**/*/**/*'
    ])
    .pipe( plumber({errorHandler:onErrorHandler}) )
    .pipe( imagemin() )
    .pipe( cached('imagemin') )
    .pipe( gulp.dest(DEST_PATH.ASSETS.IMAGES) )
    .pipe( browserSync.reload({stream: true}) );
    resolve();
  });
});

gulp.task( 'fonts', () => { 
  return new Promise( resolve => { 
    gulp.src( PATH.ASSETS.FONTS + '/*.*') 
    .pipe( plumber({errorHandler:onErrorHandler}) )
    .pipe( gulp.dest( DEST_PATH.ASSETS.FONTS )); 
    resolve(); 
  });
});

// app.js 파일을 참조하여 express 서버 구동
gulp.task('nodemon:start', () => {
  return new Promise(resolve => {
    nodemon({
      script: 'app.js',
      watch: DEST_PATH.HTML
    });
    resolve();
  });
});

// 변경, 추가되는 파일을 감지하여 자동 빌드
// gulp.task('watch', () => {
//   return new Promise(resolve => {
//     gulp.watch(PATH.HTML + "/**/*.html", gulp.series(['html']));
//     gulp.watch(PATH.ASSETS.CSS + "/**/*.scss", gulp.series(['scss:compile'])); 
//     gulp.watch(PATH.ASSETS.JS + "/**/*/**/*.js", gulp.series(['js']));
//     gulp.watch(PATH.ASSETS.FONTS + "/**/*.*", gulp.series(['fonts']));
//     gulp.watch(PATH.ASSETS.IMAGES + "/**/*", gulp.series(['imagemin']));
//     resolve();
//   });
// });
gulp.task('watch', () => {
  return new Promise(resolve => {
    const html_watcher = gulp.watch(PATH.HTML + "/**/*/**/*.*", gulp.series(['html']));  
    watcher_detail(html_watcher, PATH.HTML, DEST_PATH.HTML); 

    const scss_watcher = gulp.watch(PATH.ASSETS.CSS + "/**/*.scss", gulp.series(['scss:compile'])); 
    watcher_detail(scss_watcher, PATH.ASSETS.CSS, DEST_PATH.ASSETS.CSS); 

    const js_watcher = gulp.watch(PATH.ASSETS.JS + "/**/*/**/*.*", gulp.series(['js']));
    watcher_detail(js_watcher, PATH.ASSETS.JS, DEST_PATH.ASSETS.JS); 

    const imagemin_watcher = gulp.watch(PATH.ASSETS.IMAGES + "/**/*/**/*.*", gulp.series(['imagemin']));
    watcher_detail(imagemin_watcher, PATH.ASSETS.IMAGES, DEST_PATH.ASSETS.IMAGES); 

    const fonts_watcher = gulp.watch(PATH.ASSETS.FONTS + "/**/*.*", gulp.series(['fonts']));
    watcher_detail(fonts_watcher, PATH.ASSETS.FONTS, DEST_PATH.ASSETS.FONTS); 

    resolve();
  });
});

const watcher_detail = (watcher_target, src_path, dist_path) => {
  watcher_target.on('unlink', (filepath) => {
    const filePathFromSrc = path.relative(path.resolve(src_path), filepath);

    // scss 삭제 (min파일까지 생성했을 때)
    const extension_type = filePathFromSrc.split('.')[filePathFromSrc.split('.').length-1];
    if( extension_type === 'scss' ){
      const destFilePath_css = path.resolve(dist_path, filePathFromSrc).replace('scss','css');
      del.sync(destFilePath_css);
      const destFilePath_minCss = path.resolve(dist_path, filePathFromSrc).replace('scss','min.css');
      del.sync(destFilePath_minCss);
    }
    // html 삭제 (js. images, fonts 등은 task 생성하면서 테스트 예정)
    else{
      const destFilePath = path.resolve(dist_path, filePathFromSrc);
      del.sync(destFilePath);
    }
  });
}


// 빌드된 내용을 브라우저에 반영
gulp.task('browserSync', () => {
  return new Promise(resolve => {
    browserSync.init(null, {
      proxy: 'http://localhost:8005',
      port: 8006
    });
    resolve();
  });
});


// 빌드 시 불필요한 파일 삭제
gulp.task('clean', () => { 
  return new Promise( resolve => { 
    // del.sync(DEST_PATH.HTML, {force:true}); 
    // del.sync(DEST_PATH.HTML); 
    del.sync(dist+'/**', {force:true});
    resolve(); 
  }); 
});

var allSeries = gulp.series([ 
  'clean'
  , 'scss:compile'
  , 'html'
  , 'js'
  , 'fonts'
  , 'imagemin'
  , 'nodemon:start'
  , 'browserSync'
  , 'watch'
]);

// 실행
gulp.task( 'default', allSeries );