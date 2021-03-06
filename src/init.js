$(document).ready(function() {
  window.dancers = [];
  window.currentDancer = undefined;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
    // dancer.$node.on('click', function(event) {
    //   var height = $('body').height();
    //   var width = $('body').width();
      
    //   // if ($(this).hasClass('focus')) {
    //   //   $(this).removeClass('focus');
    //   // } else {
    //   //   $(this).addClass('focus');
    //   // }
      
    //   $(this).animate({
    //     left: width / 2,
    //     top: height / 2
    //   }, 5000, function() {});      
    // });
    
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    var height = $('body').height();
    var width = $('body').width();
    var dancerOffset = (width * .9) / window.dancers.length;

    var $jDancers = $('.dancer');

    for (var i = 0; i < $jDancers.length; i++) {
      var $j = $jDancers.eq(i);
      $j.animate({
        left: dancerOffset * i,
        top: height / 2
      }, 5000, function() {});      
    }

  });
  
  $('body').on('click', '.dancer', function(event) {
    var height = $('body').height();
    var width = $('body').width();
    
    // if ($(this).hasClass('focus')) {
    //   $(this).removeClass('focus');
    // } else {
    //   $(this).addClass('focus');
    // }
    
    window.currentDancer = $(this);
    
    $(this).animate({
      left: width / 2,
      top: height / 2
    }, 1000, function() {});  
    
    event.stopPropogation();
  });


  $('body').on('click', function(event) {
    if (window.currentDancer) {
      window.currentDancer.animate({
        left: event.clientX,
        top: event.clientY
      }, 1000, function() {});
    }
  });  
});

