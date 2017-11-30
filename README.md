## Question

You are given a DAG which may be disjointed (this represents courses in a university that must be taken in a particular order, but may represent different streams).

Identify all node with 0 in-degree.
For each such node, generate all possible paths that originate from that node

**Input**
      0      6 .      4
      /  \ .  /
    1     2
    / \ . /
  3 .  5

**Output**
0->1->3
0->1->5 
0->2->5
6->2->5
4

## Solution

I have taken a ***adjacency list*** representation of a graph for solving the above question. The ***adjacency list*** is represented by the variable name `adjacencyList` in the code.

## How to run the code?
`node graph.js`
It is assumed that node is installed in the system.
