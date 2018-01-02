var expect = require('chai').expect;
var _ = require('lodash');
var practicalTwo = require('../practicalTwo');

describe('namesOfAllAncestors()', function () {
  it('should give names of all ancestors', function () {
    var person = getFamilyTree();
    var ancestors = practicalTwo.namesOfAllAncestors(person);
    
    // ASSERTIONS
    expect(36).to.be.equal(ancestors.length);
    expect(_.includes(ancestors, 'Sue Kiplagat')).to.be.false;
    expect(_.includes(ancestors, 'Pat Kiplagat')).to.be.true;
    expect(_.includes(ancestors, 'Kim Kipsang')).to.be.true;
    expect(_.includes(ancestors, 'Kim Tergat')).to.be.true;
    expect(_.includes(ancestors, 'Mickey Wilson')).to.be.true;
  });
});

describe('modeHairColorOfAllAncestors()', function () {
  it('should give mode of hair color over all ancestors', function () {
    var person = getFamilyTree();
    var modeHair = practicalTwo.modeHairColorOfAllAncestors(person);
    
    // ASSERTIONS
    expect(modeHair).to.be.equal('blond');
  });
});

// test supporting methods
function getFamilyTree() {            
    var lastNames = ["Kiplagat", "Guerrouj", "Kimetto", "Kipsang", "Gebrselassie", "Tergat"];
    var firstNames = ["Sue", "Courtney", "Jan", "Ashley", "Pat", "Kim"];
    var hairColors = ["brown", "blond", "red", "white", "black", "green", "purple"];
    var hairColorIndex = 0;

    function hairGenerator() {
        var hairColor = hairColors[hairColorIndex];
        hairColorIndex++;
        if(hairColorIndex >= hairColors.length) hairColorIndex = 0;
        return hairColor;
    }

    var people = [];

    _.each(lastNames, (lastName) => {
        _.each(firstNames, (firstName) => people.push({ name: firstName + ' ' + lastName, hairColor: hairGenerator() }));
    });

    people.push({ name: 'Mickey Wilson', hairColor: hairGenerator() });

    var peopleIndex = 0;

    for(var i = 1; (i + 1) < people.length; i += 2) {
        var child = people[peopleIndex];
        peopleIndex++;
        var mother = people[i];
        var father = people[i+1];
        child.mother = mother;
        child.father = father;
    }

    return people[0];
}