var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  if(this.value === target) {
    return true;
  } else if(this.children.length > 0) {
    var result = false;
    for (var i=0; result === false && i<this.children.length; i++){
      // this = this.children[i]
      result = this.contains.call(this.children[i], target);
    }
    return result;
  }
  return false;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
