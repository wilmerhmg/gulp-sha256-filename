var crypto = require('crypto');

function generateHash(content){
  var hash = crypto.createHash('sha256');
  hash.update(content);
  return hash.digest('hex');
}

module.exports = generateHash;
