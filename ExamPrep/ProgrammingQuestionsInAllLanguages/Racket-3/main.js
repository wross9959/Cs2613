
class BST{

    constructor(){
        this.head = null;
    }

    getHead(){
        return this.head;
    }

    inOrder(node){
        if(node === null){
            return;
        }

        this.inOrder(node.getRight());
        console.log(`${node.getLetter()}: ${node.getFreq()}`);
        this.inOrder(node.getLeft());
    }

    printTree(){
        this.inOrder(this.getHead());
    }

    insertNode(newNode){
        this.head = this.insertNodeHelper(this.getHead(), newNode);

    }
    insertNodeHelper(currNode, newNode){
        if(currNode === null){
            return newNode;
        }
        if(newNode.getLetter() === currNode.getLetter()){
            currNode.increaseFreq();
        }
        else if(newNode.getLetter() > currNode.getLetter()){
            currNode.setLeft(this.insertNodeHelper(currNode.getLeft(), newNode));
        }
            
        else{
            currNode.setRight(this.insertNodeHelper(currNode.getRight(), newNode));
        }
        return currNode;
    }
}

class Node {
    constructor(letter) {
        this.letter = letter;
        this.left = null;
        this.right = null;
        this.freq = 1;
    }

    getFreq() {
        return this.freq;
    }

    increaseFreq() {
        this.freq += 1;
    }

    getLeft() {
        return this.left;
    }
    getRight() {
        return this.right;
    }

    setLeft(newNode) {
        this.left = newNode;
    }
    setRight(newNode) {
        this.right = newNode;
    }

    getLetter() {
        return this.letter;
    }

    setLetter(newLetter) {
        this.letter = newLetter;
    }
}


function word_to_tree(word, tree) {

    for (var letter of word.toLowerCase()) {
        currNode = new Node(letter)
        tree.insertNode(currNode)
    }
}

tree = new BST()
word_to_tree("HelLloOOOO", tree)
tree.printTree()