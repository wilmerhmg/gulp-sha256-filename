const crypto = require('crypto');

function generateHash(content) {
	const hash = crypto.createHash('sha256');
	hash.update(content);
	return hash.digest('hex');
}

module.exports = generateHash;
