const path         = require('path');
const formatStr    = require('./formatStr');
const getDateStr   = require('./getDateStr');
const generateHash = require('./generateHash');

function performHash(format, file) {
	let ext      = path.extname(file.path);
	let fname    = path.basename(file.path, ext);
	let dir      = path.dirname(file.path);
	let params   = {
		"name": fname,
		"ext": ext,
		"hash": generateHash(file.contents),
		"size": file.stat ? file.stat.size : '',
		"atime": file.stat && file.stat.atime ? getDateStr(file.stat.atime) : '',
		"ctime": file.stat && file.stat.ctime ? getDateStr(file.stat.ctime) : '',
		"mtime": file.stat && file.stat.mtime ? getDateStr(file.stat.mtime) : ''
	};
	let fileName = formatStr(format, params);
	file.path    = path.join(dir, fileName);
	return file;
}

module.exports = performHash;
