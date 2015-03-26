var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};

  stack.collection = {};
  stack.sizeStore = 0;

  stack.push = stackMethods.push;
  stack.pop = stackMethods.pop;
  stack.size = stackMethods.size;

  return stack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.collection[this.sizeStore - 1] = value;
  this.sizeStore++;
}

stackMethods.pop = function(){
  if (this.sizeStore > 0) {
    this.sizeStore--;
  }
  return this.collection[this.sizeStore - 1];
}

stackMethods.size = function(){
  return this.sizeStore;
}
