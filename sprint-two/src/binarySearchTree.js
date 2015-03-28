var BinarySearchTree = function(value){
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;

  obj.insert = function(value){
    if(value < obj.value) {
      if(obj.left === null) {
        obj.left = BinarySearchTree(value);
      } else {
        obj.left.insert(value);
      }
    } else {
      if(obj.right === null) {
        obj.right = BinarySearchTree(value);
      } else {
        obj.right.insert(value);
      }
    }
  };

  obj.contains = function(value){
    //debugger;
    if(obj.value === value) {
      return true;
    } else if (obj.left === null && obj.right === null) {
      return false;
    } else if(value < obj.value){
      return obj.left.contains(value);
    } else if (value > obj.value){
      return obj.right.contains(value);
    }
    return false;
  };

  obj.depthFirstLog = function(cb){
    cb(obj.value);
    if(obj.left !== null) {
      obj.left.depthFirstLog(cb);
    }
    if(obj.right !== null) {
      obj.right.depthFirstLog(cb);
    }
  };

  return obj;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
