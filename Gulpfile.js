'use strict';
/* https://github.com/angular-fullstack/generator-angular-fullstack
 * You can use this simplified gulpfile for creating dist by $>`gulp build`
 * Deploy to heroku or dokku using git or heroku toolbelt
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');
var nodemon = require('gulp-nodemon');


// This is a simple task to run node.js app and restart when code edited by developers
gulp.task('run', function () {
    nodemon({ script: 'server/app.js'
        , ext: 'html js'
        , ignore: [] //'ignored.js'
        , tasks: [] })
        .on('restart', function () {
            console.log('restarted!')
        })
})


// Run App - This task is to open index.html
gulp.task('run-open', ['run'],function(){
    gulp.src('./client/index.html')
        .pipe(open());
});
