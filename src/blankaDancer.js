var BlankaDancer = function(top, left) {
  Dancer.call(this, top, left);
  this.$node = $('<img class="blanka" src="' + randomImg() + '">');
  // this.$node.attr('src', randomImg)
  this.step();
  // why is this necessary?
  this.setPosition(top, left);
};

BlankaDancer.prototype = Object.create(Dancer.prototype);
BlankaDancer.prototype.constructor = BlankaDancer;

var randomImg = function() {
  var imgs = ['assets/blanka.gif', 'assets/flying-blanka.gif'];
  
  var index = Math.floor(Math.random() * (imgs.length));
  
  return imgs[index];
};

var makeBlankaDancer = function(top, left) {
  return new BlankaDancer(top, left);
};

// make fly somehow