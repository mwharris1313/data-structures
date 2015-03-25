var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};

  stack.push = stackMethods.push;
  stack.pop = stackMethods.pop;
  stack.size = stackMethods.size;

  return stack;
};

var stackMethods = {};
var collection = {};
var size = 0;

stackMethods.push = function(value){
  size++;
}

stackMethods.pop = function(){
  if (size > 0) {
    size--;
  }
}

stackMethods.size = function(){
  return size;
}
