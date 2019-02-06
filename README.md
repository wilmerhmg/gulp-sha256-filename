# Usage of gulp-sha256-filename
[![NPM version](https://img.shields.io/npm/v/gulp-sha256-filename.svg)](https://npmjs.org/package/gulp-sha256-filename)
[![Downloads](https://img.shields.io/npm/dm/gulp-sha256-filename.svg)](https://npmjs.org/package/gulp-sha256-filename)
[![Build Status](https://travis-ci.org/Dev-Wito/gulp-sha256-filename.svg?branch=master)](https://travis-ci.org/Dev-Wito/gulp-sha256-filename)
[![Coverage Status](https://coveralls.io/repos/github/Dev-Wito/gulp-sha256-filename/badge.svg?branch=master)](https://coveralls.io/github/Dev-Wito/gulp-sha256-filename?branch=master)

It's plugin for gulp rename file output with sha256 hash sum.

## Installation

````
npm i gulp-sha256-filename
````
or
```
npm i -D gulp-sha256-filename
```

## Example of the hash() function

Here is an example of how to use the hash() function in your gulpfile.js file:

```js
const gulp = require('gulp');
const hash = require('gulp-sha256-filename');

gulp.task('assemble', function() {
return gulp.src('./assembly.json')
	.pipe(hash())
	.pipe(gulp.dest('./dist'))
});
```

### Filename custom format
You can set a custom format for filename.
```js
const gulp = require('gulp');
const hash = require('gulp-sha256-filename');

gulp.task('assemble', function() {
return gulp.src('./assembly.json')
	.pipe(hash({
		format:"{name}.{hash}{ext}"
	}))
	.pipe(gulp.dest('./dist'))
});
```
and set limit length at hash
```js
const gulp = require('gulp');
const hash = require('gulp-sha256-filename');

gulp.task('assemble', function() {
return gulp.src('./assembly.json')
	.pipe(hash({
		format:"{name}.{hash:8}{ext}"
	}))
	.pipe(gulp.dest('./dist'))
});
```