// Creates and returns a new Makedancer object that can step
var MakeDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="Makedancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(this.top, this.left);
};

// create method step that gives default time in between running the step function
MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

// create setPosition methos so that the dancer is created at some random default point within the body
MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


// var newDancer = new MakeDancer(20, 40, 100)
