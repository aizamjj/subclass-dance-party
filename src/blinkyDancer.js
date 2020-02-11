var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.secondStep = MakeDancer.prototype.step;
// store the current step function at instance, which is superclass behavior

// overwrite the step method to include toggle functionality
MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.secondStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};


