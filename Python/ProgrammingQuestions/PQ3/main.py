# @Author Will Ross
# Student ID: 3734692
# Class: Cs2613
# Assesment: Python 3
# Handed in as: Programming Question 9
# Date: March 2nd, 2024


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

    def num_students(self):
        return self.size

    def add_student(self, student):
        newNode = Node(student)
        current = self.head
        
        if(self.size == 0):
            self.head = newNode
            self.tail = newNode
            self.size += 1
        
        else:
            
            while((current != None) and (current.student.student_id <  newNode.student.student_id)):
                current = current.next
            
            if(current == None):
                self.tail.next = newNode
                newNode.prev = self.tail
                self.tail = newNode
                self.size += 1
            
            elif (current.prev == None):
                newNode.next = current
                current.prev = newNode
                self.head = newNode
                self.size += 1
            
            else:
                newNode.next = current
                newNode.prev = current.prev
                current.prev.next = newNode
                current.prev = newNode
                self.size += 1
            
    def remove_student(self, student_id):
        current = self.head
        
        if(self.head == None and current.student.student_id != student_id):
            return False
        
        while (current != None and current.student.student_id != student_id):
            current = current.next
            if(current == None):
                return True
            
            #if only one item in class list
            if (current.prev == None):
                if(self.head == self.tail):
                    self.head = None
                    self.tail = None
                else:
                    self.head = current.next
                    self.tail = None
                    
            #last in list
            elif (current.next == None):
                self.tail = current.prev
                self.tail.next = None
                
            #in middle
            else:
                current.prev.next = current.next
                current.next.prev = current.prev
            self.size -= 1
            return True
    
    def changeFormat(student):
        result = "Student Name: " + student.name + " Student ID: " + str(student.student_id)
        return result
     
    def print_ascend(self):
        current = self.head
        print("Class List: ")
        while(current != None):
            print(DoublyLinkedList.changeFormat(current.student))
            current = current.next
        
    def print_descend(self):
        actSize = DoublyLinkedList.num_students(self)
        classList = [actSize]
        current = self.tail
        print("Class List (decending): ")
        while(current != None):
            print(DoublyLinkedList.changeFormat(current.student))
            current = current.prev       
def main():
    
    className = input("Enter class name and max number of students separated by the ENTER key:\n")
    maxNumOfStudents = int(input())
    class_list = DoublyLinkedList()
    out = "Please make a selection for the course ${className}\n\t1: Add Student\n\t2: Remove Student\n\t3: Print Number of Students\n\t4: Class List in Ascending Order\n\t5: Class List in Descending Order\n\t0: Exit Program"
    print(out)
    
    while(True):
        choice = int(input())
        
        #checks which operator 
        if choice == 0:
            break
            
        elif choice == 1:
            #checks if there are too many students
            if(class_list.num_students() < maxNumOfStudents):
                name = input("To add: Input student name and student number (separated by ENTER key)\n")
                student_id = int(input())
                #creates a student in the class list
                student = Student(name, student_id)
                class_list.add_student(student)
                print("Added successfully")
                
            else:
                print("Error with request:\nToo many students in current class. Class size is " + str(maxNumOfStudents) + " and currently there is " + str(class_list.num_students()))
            
        elif choice == 2:
            student_id = int(input("To remove: Input student's unique id\n"))
            #if it returns true the student was removed
            if(class_list.remove_student(student_id)):
                print("Student successfully removed")
            else:
                print("Student ID #: " + str(student_id) + " does not exist in this class list")

        elif choice == 3:
            print("The number of students in the class: " + str(class_list.num_students()))
            class_list.num_students()

        elif choice == 4:
            class_list.print_ascend()
            
        elif choice == 5:
            class_list.print_descend()
            
        else:
            print(out)

main()