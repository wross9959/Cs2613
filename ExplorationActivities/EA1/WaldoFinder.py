#import numpy as np
#from tkinter import filedialog
import cv2

# I can set it up this way but currently tkinter is having issues on macos
# waldoMap = openFile()
# waldoToFind = openFile()
# def openFile():
#     filePath = filedialog.askopenfilename(initialdir="C:\\Users\\willr\\Documents\\GitHub\\WaldoFinder",
#                                           title="File to Read?")
#     #gets the file needed for input with data
#     return filePath

while(True):
    
    #Users input
    type = input("Would you like to try the difficult waldo photo or the hard:\n\te: Easy\n\th: Hard\nInput: ")
    type.lower()
    
    #easy input
    if(type == "e"):
        #gets the two photo directory
        waldoMap = r'C:\Users\willr\Documents\GitHub\Cs2613\ExplorationActivities\EA1\WaldoEasy\WaldoBeach.jpg'
        waldoToFind = r'C:\Users\willr\Documents\GitHub\Cs2613\ExplorationActivities\EA1\WaldoEasy\waldoForBeach.jpg'
        
        #gets the size for the images
        f1 = 0.7
        f2 = 0.7
        
        break
    
    elif(type == "h"):
        
        #gets the two photo directory
        waldoMap = r'C:\Users\willr\Documents\GitHub\Cs2613\ExplorationActivities\EA1\WaldoHard\FindHard.jpg'
        waldoToFind = r'C:\Users\willr\Documents\GitHub\Cs2613\ExplorationActivities\EA1\WaldoHard\waldo.png'
        
        #asks if its a monitor or laptop
        size = input("Are you on a laptop:\n\ty: Yes\n\tn: No\nInput: ")
        
        #lowercase the input incase
        size.lower()
        
        #gets size depending on laptop or monitor
        if(size == "y"):
            f1 = 0.3
            f2 = 0.7
        else:
            f1 = 0.5
            f2 = 1.2
            
        break
    
    else:
        #if input is not valid it will promt again
        print("'" + type + "'" + " is not a valid input try again")
    

def showUserPic(waldoMap, f1, f2):
    
    #loads the photo the user selected
    
    if(f1 != ""): 
        val = f1 
    else: 
        val = f2
    
    
    userFindPhoto = cv2.resize(cv2.imread(waldoMap), (0,0), fx = val, fy = val)
    cv2.imshow("Try and find waldo", userFindPhoto)
    cv2.waitKey(0)
    
def imgPrepAndFind(waldoMap, waldoToFind, f1, f2):

    #read in photo to scan use 0 to make these grey scale due to the alogothim used in cv2
    img = cv2.resize(cv2.imread(waldoMap, 0), (0,0), fx =f1, fy = f1)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    #item to look for use 0 to make these grey scale due to the alogothim used in cv2
    template = cv2.resize(cv2.imread(waldoToFind, 0), (0,0), fx = f2, fy = f2)
    #gets the shape
    h, w = template.shape

    #allows our found rectangle to be colored
    template = cv2.cvtColor(template, cv2.COLOR_BGR2RGB)

    # all the medthods for matching during testing will see which one works best
    #methods = [cv2.TM_CCOEFF, cv2.TM_CCOEFF_NORMED, cv2.TM_CCORR, cv2.TM_CCORR_NORMED, cv2.TM_SQDIFF, cv2.TM_SQDIFF_NORMED]
    #after testing cv2.TM_CCORR wasnt the best
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


showUserPic(waldoMap, f1, f2)
imgPrepAndFind(waldoMap, waldoToFind, f1, f2)