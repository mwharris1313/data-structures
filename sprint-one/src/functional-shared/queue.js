var Queue = function(){
  var q = {};
  q.sizeStorage = 0;
  q.storage = {};
  q.enqueue = queueMethods.enqueue;
  q.dequeue = queueMethods.dequeue;
  q.size = queueMethods.size;

  return q;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.sizeStorage] = value;
  this.sizeStorage++;
}

queueMethods.dequeue = function() {
  var temp = this.storage[0];
  if(this.sizeStorage > 0) {
    var keys = Object.keys(this.storage);
    for(var i = 1; i < keys.length; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    this.sizeStorage--;
  }
  return temp;
}

queueMethods.size = function(){
  return this.sizeStorage;
}


