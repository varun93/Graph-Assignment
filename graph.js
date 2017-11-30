class Graph{

	constructor(adjacencyList){
		this.adjacencyList = adjacencyList;
	}

	getZeroInDegreeNodes(){

		// initialize the indegrees of the nodes to zero
		let inDegree = Object.keys(this.adjacencyList).reduce(function(inDegree,value){
			inDegree[value] = 0;
			return inDegree;
		},{});
		
		// calculate the inDegrees for all the nodes
		this.adjacencyList.forEach(function(neighbours){
			neighbours.forEach(function(member){
				inDegree[member] += 1;
			});
		});

		let zeroInDegreeNodes = Object.keys(inDegree).filter(function(node){
			return !inDegree[node]; 
		});

		return zeroInDegreeNodes;

	}

	// the first parameter pivot is only for printing purpose
	printNodePaths(pivot,node,path=[]){

		let neighbours = this.adjacencyList[node];

		if(neighbours.length == 0){
			console.log([pivot].concat(path).join(" -> "));
			return;
		}

		neighbours.forEach(function(member){
			path.push(member);
			this.printNodePaths(pivot,member,path);
			// remove the nodes which have already been traversed 
			path.pop();
		}.bind(this));

	}

	printZeroIndegreePaths(){

		let zeroInDegreeNodes = this.getZeroInDegreeNodes();

		zeroInDegreeNodes.forEach(function(zeroInDegreeNode){
			this.printNodePaths(zeroInDegreeNode,zeroInDegreeNode,[]);	
		}.bind(this));

	}

}

// input
let adjacencyList = [[1,2],[3,5],[5],[],[],[],[2]];
let graph = new Graph(adjacencyList);
graph.printZeroIndegreePaths();

