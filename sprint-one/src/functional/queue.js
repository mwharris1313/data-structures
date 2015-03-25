var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    if (size === 0) {
      storage[0] = value;
    } else {
      storage[size - 1] = value;
    }

    size++;
  };

  someInstance.dequeue = function(){
    var temp = storage[0];
    //debugger;

    if (size > 0) {
      for (key in storage){
        storage[key - 1] = storage[key];
        delete storage[key];
      }
      size--;
    }
    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
