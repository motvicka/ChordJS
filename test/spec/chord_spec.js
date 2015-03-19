// Generated by CoffeeScript 1.9.0
var expectChord;

expectChord = function(chord, base, modifier, suffix, bassBase, bassModifier) {
  expect(chord.base).toEqual(base);
  expect(chord.modifier).toEqual(modifier);
  expect(chord.suffix).toEqual(suffix);
  expect(chord.bassBase).toEqual(bassBase);
  return expect(chord.bassModifier).toEqual(bassModifier);
};

describe('Chord', function() {
  beforeAll(function() {
    this.base = 'E';
    this.modifier = 'b';
    this.suffix = 'sus4';
    this.bassBase = 'G';
    return this.bassModifier = '#';
  });
  describe('constructor', function() {
    return it('should set the right parameters', function() {
      var chord;
      chord = new Chord(this.base, this.modifier, this.suffix, this.bassBase, this.bassModifier);
      return expectChord(this.base, this.modifier, this.suffix, this.bassBase, this.bassModifier);
    });
  });
  return describe('parse', function() {
    return context('chord without bass', function() {
      context('simple chord', function() {
        var chord;
        chord = Chord.parse('E');
        return expectChord('E', null, null, null, null);
      });
      context('chord with suffix', function() {
        var chord;
        chord = Chord.parse('Esus4');
        return expectChord('E', null, 'sus4', null, null);
      });
      context('chord with modifier', function() {
        var chord;
        chord = Chord.parse('F#');
        return expectChord('F', '#', null, null, null);
      });
      context('chord with modifier and suffix', function() {
        var chord;
        chord = Chord.parse('F#sus4');
        return expectChord('F', '#', 'sus4', null, null);
      });
      context('chord with confusing suffix', function() {
        var chord;
        chord = Chord.parse('Fmaj9#11');
        return expectChord('F', null, 'maj9#11', null, null);
      });
      return context('chord with modifier and confusing suffix', function() {
        var chord;
        chord = Chord.parse('F#maj9b11');
        return expectChord('F', '#', 'maj9b11', null, null);
      });
    });
  });
});
