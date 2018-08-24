const gulp = require('gulp');
const del = require('del');
const shell = require('gulp-shell');
const replace = require('gulp-replace');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const file = require('gulp-file');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const bump = require('gulp-bump');
const packageName = require('./package.json').name;
const fs = require('fs');
const inlineResources = require('./tools/gulp/inline-resources');

// -------------------------------------------------------------------------
// General tasks
// -------------------------------------------------------------------------

/**
 * Cleans build folder.
 */
gulp.task('clean', (cb: Function) => {
    return del(['./build/**'], cb);
});

/**
 * Runs typescript files compilation.
 */
gulp.task('compile', () => {
    return gulp.src('package.json', { read: false })
        .pipe(shell([
            '\"node_modules/.bin/ngc\" -p tsconfig-aot.json'
        ]));
});

// -------------------------------------------------------------------------
// Packaging and Publishing tasks
// -------------------------------------------------------------------------

const bundleAmd = () => {
    const amdTsProject = ts.createProject('tsconfig.json', {
        module: 'amd',
        outFile: packageName + '.amd.js',
        typescript: require('typescript')
    });
    return gulp.src('build/bundle/**/*.ts')
        .pipe(amdTsProject()).js
        .pipe(gulp.dest('build/package'));
}
const bundleSystem = () => {
    const systemTsProject = ts.createProject('tsconfig.json', {
        module: 'system',
        outFile: packageName + '.system.js',
        typescript: require('typescript')
    });
    return gulp.src('build/bundle/**/*.ts')
        .pipe(systemTsProject()).js
        .pipe(gulp.dest('build/package'));
}
const bundleAmdPure = () => {
    const amdPureTsProject = ts.createProject('tsconfig.json', {
        module: 'amd',
        outFile: packageName + '.pure.amd.js',
        noEmitHelpers: true,
        noImplicitUseStrict: true,
        typescript: require('typescript')
    });
    return gulp.src('build/bundle/**/*.ts')
        .pipe(amdPureTsProject()).js
        .pipe(gulp.dest('build/package'));
}
const bundleSystemPure = () => {
    const systemPureTsProject = ts.createProject('tsconfig.json', {
        module: 'system',
        outFile: packageName + '.pure.system.js',
        noEmitHelpers: true,
        noImplicitUseStrict: true,
        typescript: require('typescript')
    });
    return gulp.src('build/bundle/**/*.ts')
        .pipe(systemPureTsProject()).js
        .pipe(gulp.dest('build/package'));
}

/**
 * Compiles and compiles bundles.
 */
gulp.task('compileBundles', gulp.parallel(bundleAmd, bundleAmdPure, bundleSystem, bundleSystemPure));


/**
 * Copies all source files into destination folder in a correct structure to build bundles.
 */
gulp.task('bundleCopySources', () => {
    return gulp.src(['./src/**/*.ts', './src/**/*.scss'])
        .pipe(gulp.dest('./build/bundle/' + packageName));
});

gulp.task('inline-resources', function () {
    return inlineResources('./build/bundle/');
});

/**
 * Creates special main file for bundle build.
 */
gulp.task('bundleCopyMainFile', (done: any) => {
    fs.writeFileSync(`./build/bundle/${packageName}.ts`, `export * from "./${packageName}/index";`);
    done();
});

gulp.task('uglify', gulp.parallel(
    () => gulp.src(`./build/package/${packageName}.pure.amd.js`)
        .pipe(uglify())
        .pipe(rename(`${packageName}.pure.amd.min.js`))
        .pipe(gulp.dest('./build/package')),

    () => gulp.src(`./build/package/${packageName}.pure.system.js`)
        .pipe(uglify())
        .pipe(rename(`${packageName}.pure.system.min.js`))
        .pipe(gulp.dest('./build/package')),

    () => gulp.src(`./build/package/${packageName}.amd.js`)
        .pipe(uglify())
        .pipe(rename(`${packageName}.amd.min.js`))
        .pipe(gulp.dest('./build/package')),

    () => gulp.src(`./build/package/${packageName}.system.js`)
        .pipe(uglify())
        .pipe(rename(`${packageName}.system.min.js`))
        .pipe(gulp.dest('./build/package'))
));

/**
 * Move all files into the toplevel of the package folder.
 */
gulp.task('flattenPackage', () => {
    return gulp.src([`./build/package/build/bundle/${packageName}/*`])
        .pipe(gulp.dest('./build/package'));
});

/**
 * Copy over SASS file.
 */
gulp.task('copySass', () => {
    return gulp.src([`./src/*.scss`])
        .pipe(gulp.dest('./build/package/scss'));
});

/**
 * Compile CSS file.
 */
gulp.task('buildCss', () => {
    return gulp.src(`./src/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/package/css'));
});

/**
 * Cleans the package's build folder.
 */
gulp.task('cleanPackage', (cb: Function) => {
    return del(['./build/package/build'], cb);
});

/**
 * Publishes a package to npm from ./build/package directory.
 */
gulp.task('npmPublish', () => {
    return gulp.src('package.json', { read: false })
        .pipe(shell([
            'cd ./build/package && npm publish'
        ]));
});

/**
 * Change the "private" state of the packaged package.json file to public.
 */
gulp.task('packagePreparePackageFile', () => {
    return gulp.src('./package.json')
        // .pipe(replace('\"private\": true,', '\"private\": false,'))
        .pipe(gulp.dest('./build/package'));
});

/**
 * This task will replace all typescript code blocks in the README (since npm does not support typescript syntax
 * highlighting) and copy this README file and CONTRIBUTING file into the package folder.
 */
gulp.task('packageReadmeFile', () => {
    return gulp.src(['./README.md', './CONTRIBUTING.md'])
        .pipe(replace(/```typescript([\s\S]*?)```/g, '```javascript$1```'))
        .pipe(gulp.dest('./build/package'));
});

/**
 * Bump the version patch number
 */
gulp.task('bumpPatchVersion', () => {
    return gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

/**
 * Creates a package that can be published to npm.
 */
gulp.task('package', gulp.series(
    'clean',
    'bundleCopySources',
    'bundleCopyMainFile',
    gulp.parallel('copySass', 'buildCss'),
    'inline-resources',
    gulp.parallel('compile', 'compileBundles'),
    'uglify',
    'flattenPackage',
    'cleanPackage',
    gulp.parallel('packagePreparePackageFile', 'packageReadmeFile')
));

/**
 * Increments version, creates a package, and publishes it to npm.
 */
gulp.task('bumpVersionThenPublish', gulp.series(
    'bumpPatchVersion', 
    'package', 
    'npmPublish'
));

/**
 * Creates a package and publishes it to npm.
 */
gulp.task('publish', gulp.series(
    'package', 
    'npmPublish'
));

// -------------------------------------------------------------------------
// Run tests tasks
// -------------------------------------------------------------------------
