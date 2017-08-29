describe('blankaDancer', function() {

  var blankaDancer;

  beforeEach(function() {
    blankaDancer = new BlankaDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(blankaDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should generate an img tag with blanka class', function() {
    expect(blankaDancer.$node.hasClass('blanka')).to.be.equal(true);
  });
});
