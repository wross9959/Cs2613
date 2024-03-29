# Data Structures and Algorithms database
Using MongoDb to to store data structures and algorithms

## Author

- **Name:** Will Ross
- **Student #**: 3734692
- **Course:** CS2613
- **Assesment:** Exploration Activity 2
- **Programming Lang:** JavaScript
- **Due Date:** April 2nd, 2024

- [Data Structures and Algorithms database](#data-structures-and-algorithms-database)
  - [Author](#author)
  - [Which package/library does the sample program demonstrate?](#which-packagelibrary-does-the-sample-program-demonstrate)
  - [What purpose does your program serve](#what-purpose-does-your-program-serve)
  - [How does someone run your program? \& What would be some sample input/output?](#how-does-someone-run-your-program--what-would-be-some-sample-inputoutput)
    - [Creating a Algorithm](#creating-a-algorithm)
    - [Viewing all algorithms](#viewing-all-algorithms)
    - [Creating a language for an Algorithms](#creating-a-language-for-an-algorithms)
    - [Viewing all languages for an algorithm](#viewing-all-languages-for-an-algorithm)
    - [Changing Algorithms](#changing-algorithms)
    - [Deleting a Language for an algorithm](#deleting-a-language-for-an-algorithm)

## Which package/library does the sample program demonstrate?

This package shows how users can connect a database into there NodeJs projects using mongoDB

## What purpose does your program serve

This project was designed to use a node js driver to create all the basic functions a user would need to perform CRUD (create, read, update, delete) operations on a database using a node js driver for mongoDB. Currently I am taking Cs2383 (data structures and algorithms) so I decided to start storing all my useful algorithms from the class so I can look back in future classes or when working.

## How does someone run your program? & What would be some sample input/output?

There are a couple of things the user must have done before running the program.
If you don't have Mongodb for NodeJS downloaded you must:

1. Go to MongoDB.com for there downloading manual
   - [Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
   - [MacOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
   - [Linux](https://www.mongodb.com/docs/manual/administration/install-on-linux/)
2. Go to Mongosh for the downloading manual for shell install [Manual](https://www.mongodb.com/docs/mongodb-shell/install/#std-label-mdb-shell-install) 
3. Once MongoDB is install go into mongoDBs compass application.
4. Press connect (this will create a local server on your computer)
5. Then once complete go to terminal and run this command for Node Js `npm init -y` and `npm install mongodb`

### Creating a Algorithm

```txt
PS C:\Users\willr\Documents\GitHub\Cs2613> node "c:\Users\willr\Documents\GitHub\Cs2613\ExplorationActivities\EA2\main.js"
Connected successfully to server
Welcome to the data structures and algorithms database


Currently no Algorithm is selected

Choose an option:
1. Create a new algorithm
2. Change algorithm
3. Delete a algorithm
4. View all algorithms
5. Add a language to the algorithm
6. Update a language to the algorithm
7. Delete a language to the algorithm
8. View all languages in the algorithm
9. Exit
Enter your choice: 1
Enter the name of the new Algothrim: Insertion Sort                                                                                                               
Press enter to go back to the menu:

```

### Viewing all algorithms

```txt
Current Algorithm: Insertion Sort

Choose an option:
1. Create a new algorithm
2. Change algorithm
3. Delete a algorithm
4. View all algorithms
5. Add a language to the algorithm
6. Update a language to the algorithm
7. Delete a language to the algorithm
8. View all languages in the algorithm
9. Exit
Enter your choice: 4
Current algorithms:
        - QuickSort
        - Binary Search Tree
        - Boggo Sort
        - Merge Sort
        - Insertion Sort
        - Doubly Linked List
Press enter to go back to the menu:

```

### Creating a language for an Algorithms

```txt
PS C:\Users\willr\Documents\GitHub\Cs2613> node "c:\Users\willr\Documents\GitHub\Cs2613\ExplorationActivities\EA2\main.js"
Connected successfully to server
Welcome to the data structures and algorithms database


Currently no Algorithm is selected

Choose an option:
1. Create a new algorithm
2. Change algorithm
3. Delete a algorithm
4. View all algorithms
5. Add a language to the algorithm
6. Update a language to the algorithm
7. Delete a language to the algorithm
8. View all languages in the algorithm
9. Exit
Enter your choice: 5
Current algorithms:
        - QuickSort
        - Binary Search Tree
        - Boggo Sort
        - Merge Sort
        - Insertion Sort
        - Doubly Linked List
Choose a algorithm: Insertion Sort
Algorithm changed successfully
What language would you like to add: Java
(node:23600) [MONGODB DRIVER] Warning: cursor.count is deprecated and will be removed in the next major version, please use `collection.estimatedDocumentCount` or `collection.countDocuments` instead
(Use `node --trace-warnings ...` to show where the warning was created)
Code file Path: ExplorationActivities\EA2\InsertionSort.java
Run Time input: O(n^2)
Any notes: Nothing to note
The language was successful added
Press enter to go back to the menu:
```

### Viewing all languages for an algorithm

```txt

Current Algorithm: Insertion Sort

Choose an option:
1. Create a new algorithm
2. Change algorithm
3. Delete a algorithm
4. View all algorithms
5. Add a language to the algorithm
6. Update a language to the algorithm
7. Delete a language to the algorithm
8. View all languages in the algorithm
9. Exit
Enter your choice: 8
Found algorithm languages:

---------------------------------

Algorithm: Insertion Sort
Language: Java
Code:
 /*
 *  NOTE This is not my code I got it solely for testing purposes
 *  You can find the original code at https://www.geeksforgeeks.org/insertion-sort/
 *
 */

// Java program for implementation of Insertion Sort
public class InsertionSort {
    /*Function to sort array using insertion sort*/
    void sort(int arr[])
    {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;

            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    /* A utility function to print array of size n*/
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");

        System.out.println();
    }

    // Driver method
    public static void main(String args[])
    {
        int arr[] = { 12, 11, 13, 5, 6 };

        InsertionSort ob = new InsertionSort();
        ob.sort(arr);

        printArray(arr);
    }
};


/* This code is contributed by Rajat Mishra. */
End of Code

Run Time: O(n^2)
Notes: Nothing to note

---------------------------------

Press enter to go back to the menu:

```

### Changing Algorithms

```txt
Current Algorithm: Insertion Sort

Choose an option:
1. Create a new algorithm
2. Change algorithm
3. Delete a algorithm
4. View all algorithms
5. Add a language to the algorithm
6. Update a language to the algorithm
7. Delete a language to the algorithm
8. View all languages in the algorithm
9. Exit
Enter your choice: 2
Current algorithms:
        - QuickSort
        - Binary Search Tree
        - Boggo Sort
        - Merge Sort
        - Insertion Sort
        - Doubly Linked List
Choose a algorithm: QuickSort
Algorithm changed successfully
Press enter to go back to the menu:
```

### Deleting a Language for an algorithm

```txt
Current Algorithm: Insertion Sort

Choose an option:
1. Create a new algorithm
2. Change algorithm
3. Delete a algorithm
4. View all algorithms
5. Add a language to the algorithm
6. Update a language to the algorithm
7. Delete a language to the algorithm
8. View all languages in the algorithm
9. Exit
Enter your choice: 7
Found algorithm languages:

---------------------------------

Algorithm: Insertion Sort
Language: Java
Code:
 /*
 *  NOTE This is not my code I got it solely for testing purposes
 *  You can find the original code at https://www.geeksforgeeks.org/insertion-sort/
 *
 */

// Java program for implementation of Insertion Sort
public class InsertionSort {
    /*Function to sort array using insertion sort*/
    void sort(int arr[])
    {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;

            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    /* A utility function to print array of size n*/
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");

        System.out.println();
    }

    // Driver method
    public static void main(String args[])
    {
        int arr[] = { 12, 11, 13, 5, 6 };

        InsertionSort ob = new InsertionSort();
        ob.sort(arr);

        printArray(arr);
    }
};


/* This code is contributed by Rajat Mishra. */
End of Code

Run Time: O(n^2)
Notes: Nothing to note

---------------------------------

Choose a language to delete: Java
Are you sure you want to delete Java? (Y/N): y
The language was deleted successfully
Press enter to go back to the menu:

```
