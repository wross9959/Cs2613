// How to make a class in JS
class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo);
// Animals { name: 'Bingo', specie: 'Hairy' }
console.log(bingo.sing())
// Bingo can sing
console.log(bingo.dance())
// Bingo can dance

// Subclassing (inheritance)

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
} 
class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");
console.log(clara.sing());
console.log(clara.whiskers());
// Expected Output
// "Clara can sing"
// "I have indigo whiskers"



// Creating an array
let myArray = [1, 2, 3, 4, 5];

// Accessing elements in an array
console.log(myArray[0]); // Output: 1

// Modifying elements in an array
myArray[2] = 10;

// Adding elements to an array
myArray.push(6);

// Removing elements from an array
myArray.pop();

// Creating a nested array
let nestedArray = [[1, 2], [3, 4], [5, 6]];

// Accessing elements in a nested array
console.log(nestedArray[0][1]); // Output: 2

// Modifying elements in a nested array
nestedArray[1][0] = 10;

// Adding elements to a nested array
nestedArray.push([7, 8]);

// Removing elements from a nested array
nestedArray.pop();

// 2D array representing a 3x3 grid
let grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

// Accessing elements in the grid
console.log(grid[1][2]); // Output: 5


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
        // Assuming an undirected graph
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return "Vertex not found";
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
        }
    }
}

// Example usage:
let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

graph.printGraph();

// A -> B, C
// B -> A, D
// C -> A, D
// D -> B, C