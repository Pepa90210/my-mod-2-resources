const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let word1 = new Word ('Name1');
      expect(word1).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      let word1 = new Word ('Name1');
      expect(word1.word).to.equal('Name1')
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let word1 = new Word ('Name1');
      expect(word1.removeVowels()).to.equal('Nm1')
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let word1 = new Word ('Name1');
      expect(word1.removeConsonants()).to.equal('ae')
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word1 = new Word ('Name1');  // ame1Nay
      let word2 = new Word ('Analyze');  // Analyzeyay

      expect(word1.pigLatin()).to.equal('ame1Nay')
      expect(word2.pigLatin()).to.equal('Analyzeyay')
    });
  });
});
