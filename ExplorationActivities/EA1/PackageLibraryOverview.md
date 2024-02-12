# OpenCV Exploration Activites

- [OpenCV Exploration Activites](#opencv-exploration-activites)
  - [Which package/library did you select](#which-packagelibrary-did-you-select)
  - [What is the package/library](#what-is-the-packagelibrary)
    - [What purpose does it serve](#what-purpose-does-it-serve)
    - [How do you use it](#how-do-you-use-it)
  - [What are the functionalities of the package/library](#what-are-the-functionalities-of-the-packagelibrary)
    - [Examples from my code](#examples-from-my-code)
  - [When was it created](#when-was-it-created)
  - [Why did you select this package/library](#why-did-you-select-this-packagelibrary)
  - [How did learning the package/library influence your learning of the language](#how-did-learning-the-packagelibrary-influence-your-learning-of-the-language)
  - [How was your overall experience with the package/library](#how-was-your-overall-experience-with-the-packagelibrary)
    - [When would you recommend this package/library to someone](#when-would-you-recommend-this-packagelibrary-to-someone)
    - [Would you continue using this package/library? Why or why not](#would-you-continue-using-this-packagelibrary-why-or-why-not)


## Which package/library did you select

For Exploration Activity 1 I chose to look into basic computer vision. When researching online I came across `OpenCV` for Python. I read over the documentation and came up with the idea of a Where is Waldo finder.

## What is the package/library

OpenCV (Open-source computer vision library) is an open-source library for computer vision. OpenCV works with all sorts of programming languages like Python, Java, C++, and MatLab. 

### What purpose does it serve

OpenCV is used for computer vision and machine learning for users. It provides a basic infrastructure for computer vision applications and helps with building machine learning models.

### How do you use it

For my project, I used OpenCv's object-identifying algorithms. My program was designed for finding Waldo when giving a Waldo map and a picture of Waldo. The algorithms from OpenCV will find Waldo and return a photo with a red rectangle around the area Waldo is hiding.
1. Go to your terminal
2. (Windows/Mac/Linux) Run `pip install opencv-python`
3. import cv2 at the top of the .py file

## What are the functionalities of the package/library

Using OpenCV programmers can do the following:
- Detect and recognize faces
- Identify objects
- Classify actions 
- Track movement 
- Color detection 
- Extract 3D models
- Produce 3D objects
- Stitch photos 
- Recognize scenery
- AR(augmented reality)

OpenCV also has 2500 optimized algorithms for computer vision and machine learning.

More can be found on [OpenCv.org](https://opencv.org/about/)

### Examples from my code

OpenCV has photo windows where we can read file paths on the user's computer and resize them depending on the user's preference 
for example below this is code for showing the user the Waldo map. 

- cv2.imread is a function to read a photo or file
- cv2.resize is a function to resize a photo so it is either easier to see or to shrink it down so it doesn't take up the entire user's screen
- cv2.imshow is a function to display the photo we created `cv2.imshow("Text that the prompt will display", [photo to display])`
- cv2.waitkey() is a function that will keep the window open until the user closes the window

```py

    userFindPhoto = cv2.resize(cv2.imread(waldoMap), (0,0), fx = val, fy = val)
    cv2.imshow("Try and find waldo", userFindPhoto)
    cv2.waitKey(0)

```

Methods are the photo search methods provided by OpenCV to find objects on images

```py

    methods = [cv2.TM_CCOEFF, cv2.TM_CCOEFF_NORMED, cv2.TM_CCORR, cv2.TM_CCORR_NORMED, cv2.TM_SQDIFF, cv2.TM_SQDIFF_NORMED]

```

`cv2.matchTemplate(image, imageToFind, current search Method)` the matchTemplate function will scan across the photos provided and check where the photos match the most. in the example below we are taking a photo of Waldo and saving it to a variable named template. Then we change the colour of our rectangle to be allowed to be coloured and not just grey. Then we use the matchTemplate to check all the methods in a variable called curr to see what OpenCV has found.

```py

    template = cv2.resize(cv2.imread(waldoToFind, 0), (0,0), fx = f2, fy = f2)
    #gets the shape
    h, w = template.shape

    #allows our found rectangle to be coloured
    template = cv2.cvtColor(template, cv2.COLOR_BGR2RGB)
    result = cv2.matchTemplate(img2, template, curr)

```

Using this if statement we check two of our methods to get our two required locations for the rectangle. OpenCV recommends using these two methods to find the bottom coors and top coors of where the rectangle should be.

```py
# using these methods cause they get the smallest size
        if(curr in [cv2.TM_SQDIFF, cv2.TM_SQDIFF_NORMED]):
            location = min_loc
        else:
            location = max_loc

```

The following code uses the location variable we got from the if statement and gets the bottom right of where our rectangle should be. Once we have the bottom right we add the height and width of the object to be found and then we display it to the user.

```py

    bottom_right = (location[0] + w, location[1] + h )
    cv2.rectangle(img2, location, bottom_right, (0, 0, 255), 5)
    cv2.imshow("Match", img2)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

```

## When was it created

OpenCV was first created in the year 2000 and has quickly grown to become one of the most used open-source libraries in computer vision and machine learning.

## Why did you select this package/library

I chose OpenCV due to my growing interest in computer vision. I'm currently in school for a Software engineering degree and at the end of every engineering degree they must complete a year-long capstone project. With my capstone, I know it's earily but I have a couple of ideas for projects that I could do, and I saw this as an opportunity to get a better understanding of how machine /computer vision works to help me grow in this specific area of interest. 

## How did learning the package/library influence your learning of the language

With Python, I know there are millions of different libraries and tons of cool stuff you can build. From this learning exercise, I learned that with the help of external packages/libraries, you can do some complex projects in under 100 lines of code. 

This Section of code alone runs the photos to look for the desired object, runs it through all the vision methods returns where Waldo is and circles him with a red rectangle so it's easier for the user. Without using libraries this code would be nowhere near as close and simple as OpenCv has made it.

```

methods = [cv2.TM_CCOEFF, cv2.TM_CCOEFF_NORMED, cv2.TM_CCORR_NORMED, cv2.TM_SQDIFF, cv2.TM_SQDIFF_NORMED]

    #the one method that works perfectly
    #methods = [cv2.TM_CCOEFF_NORMED]
    for curr in methods:
        img2 = img.copy()
        
        #provides us with a convolution(takes our template and slides it across our img and tries to make it)
        result = cv2.matchTemplate(img2, template, curr)
        
        
        # gets the size needed to compare 
        # e.g. 
        # if the image is 4x4 and the template is 2x2 this will get the avg 3x3 and that will slide in 3x3 to get max coverage on the img
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        # prints all the possible locations
        #print(min_loc, max_loc)
        
        # using these methods cause they get the smallest size
        if(curr in [cv2.TM_SQDIFF, cv2.TM_SQDIFF_NORMED]):
            location = min_loc
        else:
            location = max_loc
            
        # putting a rectangle around the found item
        
        bottom_right = (location[0] + w, location[1] + h )
        cv2.rectangle(img2, location, bottom_right, (0, 0, 255), 5)
        cv2.imshow("Match", img2)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

```
[OpenCV-Python Tutorials](https://vovkos.github.io/doxyrest-showcase/opencv/sphinx_rtd_theme/page_tutorial_py_root.html)


## How was your overall experience with the package/library

This library is great the python community has tons of documents and examples online if you get stuck. OpenCV even has an OpenCV University with tons of videos and documents to help beginners or even advanced programmers with tons of different projects.

Going forward when researching I did find a couple of other projects I would enjoy building with OpenCV and would highly suggest anyone look into their huge library. 

### When would you recommend this package/library to someone

I would highly recommend OpenCV for any project big or small that involves machine learning or computer vision. It's very beginner-friendly to users who have never done any AI projects before. If you have never used Python or just want to use a different language there is Java, C++, and MatLab that OpenCV also works with. There are tons of free resources online that showcase all the different functionalities of OpenCV.

### Would you continue using this package/library? Why or why not

Yes, just looking through the documentation I want to look into voice recognition and track moving objects for other cool projects. One I was looking into was using movement tracking for cars or satellites. It's a huge library and there are tons of projects I would continue to look into.