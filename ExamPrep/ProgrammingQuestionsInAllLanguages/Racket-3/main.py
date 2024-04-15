



class BST:
    def __init__(self, head=None):
        self.head = head
    
    def getHead(self):
        return self.head
    
    def inOrder(self, node):
        if(node is None):
            return
        
        self.inOrder(node.getLeft())
        print(f'{node.getLetter()}: {node.getFreq()}')
        self.inOrder(node.getRight())
    
    def printTree(self):
        self.inOrder(self.getHead())
    
    def insertNode(self, newNode):
        self.head = self.insertNodeHelper(self.getHead(), newNode)
        
    def insertNodeHelper(self, currNode, newNode):
        
        if(currNode is None):
            return newNode
        
        if(newNode.getLetter() == currNode.getLetter()):
            currNode.increaseFreq()
            
        elif(newNode.getLetter() < currNode.getLetter()):
            currNode.setLeft(self.insertNodeHelper(currNode.getLeft(), newNode))
            
        else:
            currNode.setRight(self.insertNodeHelper(currNode.getRight(), newNode))
        
        return currNode

   

class Node:
    def __init__(self, left = None, right = None, letter = "", freq = 1):
        self.left = left
        self.right = right
        self.letter = letter
        self.freq = freq
        
    def getFreq(self):
        return self.freq
    
    def increaseFreq(self):
        self.freq += 1
        
    def getRight(self):
        return self.right 
    
    def getLeft(self):
        return self.left
    
    def setLeft(self, newNode):
        self.left = newNode
        
    def setRight(self, newNode):
        self.right = newNode
    
    def getLetter(self):
        return self.letter
    
    def setLetter(self, newLetter):
        self.letter = newLetter
            

def word_to_tree(word, tree):
    for curr in word.lower():
        node = Node(letter = curr)
        tree.insertNode(node)
        
tree = BST()
word_to_tree("HelLloOOOO", tree)
tree.printTree()
        