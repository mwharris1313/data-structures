var Queue = function() {
  this.sizeStorage = 0;
  this.collection = {};
};

Queue.prototype.enqueue = function(value){
  this.collection[this.sizeStorage] = value;
  this.sizeStorage++;
}

Queue.prototype.dequeue = function(){
  var temp = this.collection[0];
  if (this.sizeStorage > 0) {
    for (k in this.collection){
      this.collection[k - 1] = this.collection[k];
    }
    this.sizeStorage--;
  }
  return temp;
}

Queue.prototype.size = function(){
  return this.sizeStorage;
}
