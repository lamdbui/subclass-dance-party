var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  var bound = this.step.bind(this);
  setTimeout(bound, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  
  this.$node.css(styleSettings);
};
