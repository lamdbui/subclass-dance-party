// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  
};

Dancer.prototype.step = function() {
  //setTimeout(this.step, this.timeBetweenSteps);
  var that = this;
  
  var bound = that.step.bind(that);
  
  setTimeout(bound, that.timeBetweenSteps);
  
  // setTimeout(function() {
  //   that.step(); 
  //   //this.step.call(that);
  // }, that.timeBetweenSteps);
  // //setTimeout(that.step, this.timeBetweenSteps);
  
  //this.$node.toggle();
  that.$node.toggle();
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  
  this.$node.css(styleSettings);
};

var BlinkyDancer = Dancer;

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  return new Dancer(top, left, timeBetweenSteps);  
};

// var makeDancer = function(top, left, timeBetweenSteps) {
//   return new Dancer(top, left, timeBetweenSteps);  
// };

