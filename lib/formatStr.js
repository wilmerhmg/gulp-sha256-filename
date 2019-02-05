const reObj = /\{[^}]+\}/gm;
const reNum = /\{\d+\}/gm;

function formatStr(text, params) {
	let re;

	if(arguments.length > 1) {
		if(typeof params !== 'object') {
			params = Array.prototype.slice.call(arguments, 1);
			re     = reNum;
		}
		else {
			re = reObj;
		}

		text = text.replace(re, function (item) { // eslint-disable-line no-param-reassign
			let temp   = item.slice(1, -1).split(':');
			let key    = temp[0];
			let length = temp[1];

			if(params[key] !== undefined) {
				temp = params[key];
				if(!isNaN(length) && length > 0) {
					temp = temp.substr(0, length);
				}
				return temp;
			}
			return item;
		});
	}

	return text;
}

module.exports = formatStr;
