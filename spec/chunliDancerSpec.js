describe('chunliDancer', function() {

  var chunliDancer;

  beforeEach(function() {
    chunliDancer = new ChunLiDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(chunliDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should generate an img tag with chunli class', function() {
    expect(chunliDancer.$node.hasClass('chunli')).to.be.equal(true);
  });
});