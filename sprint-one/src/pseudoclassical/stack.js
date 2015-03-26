var Stack = function() {
  this.sizeStorage = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[this.sizeStorage] = value;
  this.sizeStorage++;
}

Stack.prototype.pop = function(){
  if(this.sizeStorage > 0) {
    this.sizeStorage--;
  }
  return this.storage[this.sizeStorage];
}

Stack.prototype.size = function(){
  return this.sizeStorage;
}
