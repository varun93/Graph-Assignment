const readline = require('readline');
const Graph = require('./graph.js');

const cl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// reject the promise if not an integer
const question = (q) => {

	return new Promise((resolve,reject) => {
		cl.question(q, (answer) => {	
			answer = parseInt(answer);	
			Number.isInteger(answer) ? resolve(answer) : reject("Please Enter a Valid number");
		});
	});

}


(async function main() {

	let adjacencyList = [];
	let numberOfNodes = 0;
	
	try{
		numberOfNodes = await question("Enter the number of nodes");
	}
	catch(e){
		console.log(e);
		cl.close();
	}
		
	console.log(`Number of nodes is ${numberOfNodes}`);

	let counter = 0;

	while(counter < numberOfNodes){

		let neighboursCount = 0;

		try{
			neighboursCount = await question(`Please enter the number of neighbours for node ${counter}`);	
		}
		catch(e){
			console.log(e);
			cl.close();
		}
		
		console.log(`The number of nodes you entered are ${neighboursCount}`);

		let innerCounter = 0; 
		let neighbours = [];

		while(innerCounter < neighboursCount){

			let neighbour = 0;
			
			try{
				neighbour = await question(`Please enter the neighbour ${innerCounter} for node ${counter}`);
			}
			catch(e){
				console.log(e);
				cl.close();
			}
	
			console.log(`Value you entered is ${neighbour}`);
			neighbours.push(neighbour);
			innerCounter++;
		
		}

		adjacencyList.push(neighbours);
		counter++;		
	}

	cl.close();

	let graph = new Graph(adjacencyList);
    graph.printZeroIndegreePaths();

})();