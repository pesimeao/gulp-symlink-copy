var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var vfs = require('vinyl-fs');

/**
 * Gulp task to create the symlink.
 * This will create Symlink of all libs into src folder.
 */
gulp.task('install', function(done) {
    // Read all folders inside libs folder
    var libFolders = fs.readdirSync('libs').filter(file => fs.statSync(path.join('libs', file)).isDirectory());
    // For each folder, create the symlink
    libFolders.forEach(function(libFolder) {
        fs.symlinkSync(path.join('..', 'libs', libFolder), path.join('src', libFolder), 'junction');
    });
    
    done();
});

/**
 * Gulp task to copy files from src to dist.
 * Should resolve files inside symlink,
 */
gulp.task('build', function() {
    return vfs.src('src/**/*', {follow: true})
        .pipe(vfs.dest('dist/'));
});
