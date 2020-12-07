//jasmine code goes in this file

//add files and require(plugins) to karmaconf file once i get it working


describe('translate', function () {
    it('word starting with "a" should add way to end of word', function() {
		  expect(translate('any')).toEqual('anyway'); 
    })

    it('word starting with "a" should add way to end of word', function() {
      expect(translate('apple')).toEqual('appleway'); 
    })

    it('word starting with "e" should add way to end of word', function() {
		  expect(translate('every')).toEqual('everyway'); 
    })

    it('word starting with "e" should add way to end of word', function() {
      expect(translate('everyday')).toEqual('everydayway'); 
    })

    it('word starting with "i" should add way to end of word', function() {
		  expect(translate('it')).toEqual('itway'); 
    })

    it('word starting with "o" should add way to end of word', function() {
		  expect(translate('over')).toEqual('overway'); 
    })

    it('word starting with "o" should add way to end of word', function() {
      expect(translate('open')).toEqual('openway'); 
    })

    it('word starting with "u" should add way to end of word', function() {
		  expect(translate('under')).toEqual('underway'); 
    })

    it('capital will convert to lowercase', function() {
      expect(translate('Upsidedown')).toEqual('upsidedownway'); 
    })

    it('single consonant will move to end of word and add ay to end of word', function() {
      expect(translate('computer')).toEqual('omputercay'); 
    })

    it('single consonant will move to end of word and add ay to end of word', function() {
      expect(translate('keyboard')).toEqual('eyboardkay'); 
    })

    it('single consonant will move to end of word and add ay to end of word', function() {
      expect(translate('cellphone')).toEqual('ellphonecay'); 
    })

    it('two consonants will move to end of word and add ay to end of word', function() {
      expect(translate('click')).toEqual('ickclay'); 
    })

    it('three consonants will move to end of word and add ay to end of word', function() {
      expect(translate('splash')).toEqual('ashsplay'); 
    })

    it('four consonants will move to end of word and add ay to end of word', function() {
      expect(translate('system')).toEqual('emsystay'); 
    })

    it('checking that the lower case conversion works', function() {
      expect(translate('SERVER')).toEqual('erversay'); 
    })

    it('checking that the lower case conversion works', function() {
      expect(translate('GaMiNg')).toEqual('aminggay'); 
    })
});