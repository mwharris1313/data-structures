var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(stackMethods);
  obj.sizeStorage = 0;
  obj.collection = {};

  return obj;
};

var stackMethods = {};
stackMethods.push = function (value){
  this.collection[this.sizeStorage - 1] = value;
  this.sizeStorage++;
}

stackMethods.pop = function (){
  if (this.sizeStorage > 0) {
    this.sizeStorage--;
  }
  return this.collection[this.sizeStorage - 1];

}

stackMethods.size = function (){
  return this.sizeStorage;
}

