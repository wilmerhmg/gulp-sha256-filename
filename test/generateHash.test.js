/* eslint-env mocha */
const generateHash = require('../lib/generateHash');
const {expect} = require('chai');

describe('generateHash.js', () => {
	it('should handle simple content', () => {
		expect(generateHash('0123456789')).to.equal('84d89877f0d4041efb6bf91a16f0248f2fd573e6af05c19f96bedb9f882f7882');
	});

	it('should handle empty content', () => {
		expect(generateHash('')).to.equal('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
	});

	it('should handle null content', () => {
		function fn() {
			generateHash(null);
		}

		expect(fn).to.throw; // eslint-disable-line no-unused-expressions
	});
});
