var gulp = require('gulp');
var fs = require('gulp');
var scan = require('gulp-scan');
var runSequence = require('run-sequence');
var fs = require('fs');
JSON.stringifyAligned = require('json-align');
var checkName = ""
var checkcomment = ""
var cons = [];


var date = new Date();
var month = new String(date.getMonth()+1);
var dayOr = new String(date.getDate());
var day;
if(dayOr.length === 1){
    day = new String('0'+dayOr);
}else{
    day = dayOr;
}
var regex = new RegExp('<!-- \\['+month+'\\/'+day+'(.*?)-->', 'gi') ;

String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}
// gulp.task('two', function () {
//     return gulp.src('../hmall/**/*.html')
//         .pipe(scan({ term: regex, fn: function (match, file) {
//             // console.log(file)
//             // for (var k in file) {
//             //     console.log(k + " : " + file[k]);
//             // }
//             var start = file.path.lastIndexOf('\\')+1;
//             var end = file.path.indexOf(file.extname);
//             var fileName = file.path.substring(start, end)
//             if(fileName != checkName) console.log(fileName);
//             if(checkcomment != match || fileName != checkName) console.log("    "+match);
//             // console.log();
//             // console.log(file.extname);
//             checkName = fileName;
//             checkcomment = match;
            
//         }})
//     );
// });


gulp.task('two', function () {
    return gulp.src('../hmall/**/*.html')
        .pipe(scan({ term: regex, fn: function (match, file) {
            var obj = {}
            var start = file.path.lastIndexOf('hmall')
            var end = file.path.length;
            var fileName = file.path.substring(start, end).replaceAll('\\', '\/');
            var checkOverlap = false;
            var valStart = match.indexOf('[');
            var valEnd = match.indexOf('-->');
            var value = match.substring(valStart, valEnd)
            for (let i = 0; i < cons.length; i++) {
                if(cons[i].url === fileName){
                    checkOverlap = cons[i];
                    break;
                }
            }
            if(checkOverlap){
                if(checkOverlap.etc_cnt.indexOf(value) === -1) checkOverlap.etc_cnt.push(value);
                // checkOverlap.etc_cnt.push(value);
                // console.log(checkOverlap.etc_cnt.indexOf(value));
            }else{
                obj.url = fileName;
                obj.end_date = month + '/' + day;
                // obj.end_date.push();
                obj.etc_cnt = [];
                obj.etc_cnt.push(value);
                cons.push(obj);
            }
        }})
    );
});




gulp.task('default', gulp.series('two', function(done) {
    // console.log(cons)
    // var json = JSON.stringify(cons);
    console.log(day);
    var json = JSON.stringifyAligned(cons);
    var total = json.replaceAll("\"url\"", "url" ).replaceAll("\"etc_cnt\"", "etc_cnt" ).replaceAll("\"end_date\"", "end_date" );
    fs.writeFile('comment_file.js', total, (err) => {
        // if (err) throw err;
        console.log('The file has been saved!');
        done();
    });
}));


// gulp.task('sd', function(done) {
//     runSequence('two', ['dddd'], done);
// });