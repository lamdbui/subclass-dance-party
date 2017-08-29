var ChunLiDancer = function(top, left) {
  Dancer.call(this, top, left);
  this.$node = $('<img class="chunli" src="' + randomImg() + '">');
  // this.$node.attr('src', randomBlanka)
  this.step();
  // why is this necessary?
  this.setPosition(top, left);
};

ChunLiDancer.prototype = Object.create(Dancer.prototype);
ChunLiDancer.prototype.constructor = ChunLiDancer;

var randomImg = function() {
  var imgs = ['assets/kicking-chunli.gif', 'assets/spinning-chunli.gif'];
  
  var index = Math.floor(Math.random() * (imgs.length));
  
  return imgs[index];
};

var makeChunLiDancer = function(top, left) {
  return new ChunLiDancer(top, left);
};

// make fly somehow