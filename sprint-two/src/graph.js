

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = new gNode(node);
};

Graph.prototype.contains = function(node){
  for(k in this.nodes) {
    if(k === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var edge = this.nodes[fromNode].edge;
  for(var i = 0; i < edge.length; i++) {
    if(edge[i] === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edge.push(toNode);
  this.nodes[toNode].edge.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  for(k in this.nodes) {
    cb(k);
  }
};

var gNode = function(node){
  this.value = node;
  this.edge = [];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




