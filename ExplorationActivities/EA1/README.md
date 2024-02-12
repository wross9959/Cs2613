# WaldoFinder
Using OpenCV to Find Waldo in Photos


## Author

- **Name:** Will Ross
- **Student #**: 3734692
- **Course:** CS2613
- **Assesment:** Exploration Activity 1
- **Programming Lang:** Python
- **Due Date:** February 13th, 2024

- [WaldoFinder](#waldofinder)
  - [Author](#author)
  - [Which package/library does the sample program demonstrate?](#which-packagelibrary-does-the-sample-program-demonstrate)
  - [What purpose does your program serve](#what-purpose-does-your-program-serve)
  - [How does someone run your program? \& What would be some sample input/output?](#how-does-someone-run-your-program--what-would-be-some-sample-inputoutput)
      - [Easy Waldo Photo](#easy-waldo-photo)
      - [Hard Waldo Photo](#hard-waldo-photo)




## Which package/library does the sample program demonstrate?

OpenCV (Open-source computer vision library) is an open-source library for computer vision. OpenCV works with all sorts of programming languages like Python, Java, C++, and MatLab. 

## What purpose does your program serve

This program can be used as a learning experience to help people get more experience working with computer vision models. I have tested the program out in other situations like finding a specific car in a parking lot. This is a good start to a computer vision program if a user wants to create something more advanced 

## How does someone run your program? & What would be some sample input/output?

There are a couple of things the user must have done before running the program.
If you don't have OpenCV for Python downloaded you must:

1. Go to your terminal
2. (Windows/Mac/Linux) Run `pip install opencv-python`

Once complete the user can now run the program. One thing to keep in mind, I have preloaded the photo directory with GitHub so if you move files through your desktop you will have to change the photo directory for the program.

There are three possible outputs a user can have with this program depending on the user's input in the terminal

#### Easy Waldo Photo
```
Would you like to try the difficult Waldo photo or the hard:
        e: Easy
        h: Hard
Input: e
```
After giving `e` as an input the user will be prompted with this photo. Currently, there is nothing on it the user can either try and find Waldo on their own before OpenCV finds it or then can just exit out of the window right away. The user must exit out of the window to move on.

![Find Waldo Easy](DocumentationAssests/WaldoEasyStartPhoto.png)

After exiting out of the photo window the user will be shown another window with Waldo found and he will have a red rectangle surrounding Waldo to help the user see where he is. Same as the window prior the user must close the window to move on.

![Found Waldo Easy](DocumentationAssests/foundPhotoEasy.png)

#### Hard Waldo Photo

Notice there are two hard photo outputs. Due to OpenCV's algorithms, the size of the user's screen is dependent on the OpenCV image finder. So if the user is using a laptop follow the output walkthrough 1. If the user is using a monitor for correct results they must use output walkthrough 2.

**Output walkthrough 1**

```
Would you like to try the difficult waldo photo or the hard:
        e: Easy
        h: Hard
Input: h
Are you on a laptop:
        y: Yes
        n: No
Input: y
```
After giving `h` and `y` as inputs the user will be prompted with this photo. Currently, there is nothing on it the user can either try and find Waldo on their own before OpenCV finds it or then can just exit out of the window right away. The user must exit out of the window to move on.

![Find Waldo Hard](DocumentationAssests/WaldoHardStartPhoto.png)

After exiting out of the photo window the user will be shown another window with Waldo found and he will have a red rectangle surrounding Waldo to help the user see where he is. Same as the window prior the user must close the window to move on.

![Found Waldo Hard](DocumentationAssests/foundPhotoHard.png)



**Output walkthrough 2**

```
Would you like to try the difficult waldo photo or the hard:
        e: Easy
        h: Hard
Input: h
Are you on a laptop:
        y: Yes
        n: No
Input: n
```
After giving `h` and `n` as inputs the user will be prompted with this photo. Currently, there is nothing on it the user can either try and find Waldo on there own before OpenCV finds it or then can just exit out of the window right away. The user must exit out of the window to move on.

![Find Waldo Hard](DocumentationAssests/WaldoHardStartPhoto.png)

After exiting out of the photo window the user will be shown another window with Waldo found and he will have a red rectangle surrounding Waldo to help the user see where he is. Same as the window prior the user must close the window to move on.

![Found Waldo Hard](DocumentationAssests/foundPhotoHard.png)


