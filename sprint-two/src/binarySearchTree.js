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
  obj.contains = function(){

  };
  obj.depthFirstLog = function(){

  };
  return obj;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
