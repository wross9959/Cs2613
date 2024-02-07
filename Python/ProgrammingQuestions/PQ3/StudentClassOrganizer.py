class Student:
    def __init__(self, name,student_id):
        self.name = name
        self.student_id = student_id

class Node:
    def __init__(self, student):
        self.student = student
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

def main():

    className = input("Enter class name and max number of students separated by the ENTER key")
    studentNum = input("")
    class_list = DoublyLinkedList()
    promt = "Please make a selection for the course ${className}\n\t1: Add Student\n\t2: Remove Student\n\t3: Print Number of Students\n\t4: Class List in Ascending Order\n\t5: Class List in Descending Order\n\t0: Exit Program"
    choice = int(input(promt))


    while(True):
        #checks which operator 
        if choice == 0:
            break
        elif choice == 1:
            num_students()
            
        elif choice == 2:
            add_student()

        elif choice == 3:
            remove_student()

        elif choice == 4:
            print_ascend()

        elif choice == 5:
            print_descend()

        else:
            choice = int(input(promt))

# returns the current number of students registered in the course.
def num_students(self):
    return self.size

# takes a Student object and adds it to the course in order of student ID.
def add_student(self, student):
    
    new_node = Node(student)
    if(not(self.head)):
        self.head = self.tail = new_node
    else:
        current = self.head
        while(current and current.student.student_id < student.student_id):
            current = current.next
        if(current == self.head):
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        elif current is None:  # Insert at end
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
        else:  # Insert in middle
            new_node.prev = current.prev
            new_node.next = current
            current.prev.next = new_node
            current.prev = new_node
    self.size += 1
    
    

# takes an integer (student ID) and removes the first occurrence of that student id from the course while maintaining order.

def remove_student():
    
    
    
    return 0

# return a string containing all students in the class (name + id) in ascending order of id. 
# String should be readable if printed out immediately after return.

def print_ascend():
    
    
    
    return 0

#return a string containing all students in the class (name + id) in descending order of id. 
# String should be readable if printed out immediately after return.

def print_descend():
    
    
    
    return 0
def switch(n):
    



     
        


    
    