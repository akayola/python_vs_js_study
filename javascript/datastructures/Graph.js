//Graph.js

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    depthFirstRecurcive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start);
        return result;
    }
    depthFirstIterative(start) {
        const result = [];
        const visited = {};
        const stack = [start];
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    // need fix this one to make bread-first recursive
    breadthFirstRecursive(start) {
        const queue = [];
        const result = [];
        const visited = {};
        let currentVertex;
        const adjacencyList = this.adjacencyList;

        (function bfs(vertex) {
            if (!vertex) return null;
            queue.push(start)
            visited[vertex] = true;
            result.push(vertex);
            currentVertex = queue.pop();
            adjacencyList[currentVertex].forEach(neighbor => {
            //adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return bfs(neighbor)
                }
            });
        })(start);
        return result;
    }
    breadthFirstIterative(start) {
        const queue = [];
        const result = [];
        const visited = {};
        let currentVertex;

        queue.push(start);
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => { // Left to Right
            //this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => { //Right to Left
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g);

console.log(g.depthFirstRecurcive("A"));
console.log(g.depthFirstIterative("A"));

console.log(g.breadthFirstRecursive("A"));
console.log(g.breadthFirstIterative("A"));