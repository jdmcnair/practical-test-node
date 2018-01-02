var expect = require('chai').expect;
var practicalOne = require('../practicalOne');

describe('reverseWordsInString()', function () {
  it('should reverse words in string', function () {
    // ASSERTIONS
    expect('phil is name my Hello').to.be.equal(practicalOne.reverseWordsInString('Hello my name is phil'));
    expect('shins my kicking stop George,').to.be.equal(practicalOne.reverseWordsInString('George, stop kicking my shins'));
    expect('Strings-with-hyphens-are-still-one-word').to.be.equal(practicalOne.reverseWordsInString('Strings-with-hyphens-are-still-one-word'));
    expect('?  spaces  Two').to.be.equal(practicalOne.reverseWordsInString('Two  spaces  ?'));
  });
});

describe('isPalindrome()', function () {
  it('should determine if string is a palindrome', function () {
    // ASSERTIONS
    expect(practicalOne.isPalindrome('racecar')).to.be.true;
    expect(practicalOne.isPalindrome('Hannah')).to.be.true;
    expect(practicalOne.isPalindrome('Able was I ere I saw Elba')).to.be.true;
    expect(practicalOne.isPalindrome('Kevin likes to climb rocks')).to.be.false;
    expect(practicalOne.isPalindrome('Hannahash')).to.be.false;
  });
});

describe('doCalculation()', function () {
  it('should perform calculation in passed in expression', function () {
    // ASSERTIONS
    expect(2).to.be.equal(practicalOne.doCalculation('1+1'));
    expect(4).to.be.equal(practicalOne.doCalculation('1+1+1+1'));
    expect(3).to.be.equal(practicalOne.doCalculation('1+3-1'));
    expect(2).to.be.equal(practicalOne.doCalculation('1-1+2'));
    expect(7).to.be.equal(practicalOne.doCalculation('1-1+2+3+4+5-3-5-2+2-2+3'));
  });
});