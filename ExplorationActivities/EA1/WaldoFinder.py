import numpy as np
from tkinter import filedialog
import cv2
import tkinter as tk
from tkinter import Button, Label, Toplevel
from PIL import Image, ImageTk
# 
# Make a GUI to select which photo you want to find waldo
# use tinker or somethinf else
# once selected we can use predeteremind values for the size index of the photos
# then feed it all into the program
# 
# 
# 
# 
# 


# def show_selected_image(image_path):
#     top = Toplevel()
#     top.title('Selected Image')
#     img = Image.open(image_path)
#     img = ImageTk.PhotoImage(img)
#     img_label = Label(top, image=img)
#     img_label.image = img
#     img_label.pack()

# def create_image_button(window, image_path, position):
#     img = Image.open(image_path)
#     img.thumbnail((100, 100))  # Resizing the image to thumbnail size
#     img = ImageTk.PhotoImage(img)
#     btn = Button(window, image=img, command=lambda: show_selected_image(image_path))
#     btn.image = img
#     btn.grid(column=position, row=0, padx=10, pady=10)  # Added padding for visual separation
    
#     select_button = Button(window, text="Select", command=lambda: show_selected_image(image_path))
#     select_button.grid(column=position, row=1, padx=10, pady=10)

# root = tk.Tk()
# root.title("Choose an Image")
# root.geometry("800x600")  # Set the size of the window to 800x600 pixels


# # Replace 'image1.jpg', 'image2.jpg', 'image3.jpg' with the paths to your images
# create_image_button(root, 'C:\\Users\\willr\\Documents\\GitHub\\WaldoFinder\\Waldo1\\WaldoBeach.jpg', 0)
# create_image_button(root, 'C:\\Users\\willr\\Documents\\GitHub\\WaldoFinder\\Waldo2\\map.jpg', 1)
# create_image_button(root, 'C:\\Users\\willr\\Documents\\GitHub\\WaldoFinder\\Waldo3\\FindHard.jpg', 2)

# root.mainloop()


def openFile():
    filePath = filedialog.askopenfilename(initialdir="C:\\Users\\willr\\Documents\\GitHub\\WaldoFinder",
                                          title="File to Read?")
    #gets the file needed for input with data
    return filePath




waldoMap = openFile()
waldoToFind = openFile()

#test 1
f1 = 0.7
f2 = 0.7

# # test 3
# f1 = 0.5
# f2 = 1.2

# # test 3
# f1 = 0.5
# f2 = 1.2

#read in photo to scan use 0 to make these grey scale due to the alogothim used in cv2
img = cv2.resize(cv2.imread(waldoMap, 0), (0,0), fx =f1, fy = f1)
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
#item to look for use 0 to make these grey scale due to the alogothim used in cv2
template = cv2.resize(cv2.imread(waldoToFind, 0), (0,0), fx = f2, fy = f2)
#gets the shape
h, w = template.shape

#allows our found rectangle to be colored
template = cv2.cvtColor(template, cv2.COLOR_BGR2RGB)




# testing 2d array 
# print(img)


# all the medthods for matching during testing will see which one works best
#methods = [cv2.TM_CCOEFF, cv2.TM_CCOEFF_NORMED, cv2.TM_CCORR, cv2.TM_CCORR_NORMED, cv2.TM_SQDIFF, cv2.TM_SQDIFF_NORMED]
#after testing cv2.TM_CCORR wasnt the best
methods = [cv2.TM_CCOEFF, cv2.TM_CCOEFF_NORMED, cv2.TM_CCORR_NORMED, cv2.TM_SQDIFF, cv2.TM_SQDIFF_NORMED]


for curr in methods:
    img2 = img.copy()
    
    #provides us with a convolution(takes our template and slides it across our img and tries to make it)
    result = cv2.matchTemplate(img2, template, curr)
    
    
    # gets the size needed to compare 
    # e.g. 
    # if the image is 4x4 and the template is 2x2 this will get the avg 3x3 and that will slide in 3x3 to get max coverage on the img
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
    # prints all the possible locations
    print(min_loc, max_loc)
    
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