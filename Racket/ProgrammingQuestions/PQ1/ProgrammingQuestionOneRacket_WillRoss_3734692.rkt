#lang slideshow

; @author: Will Ross #3734692
; Assesment: Programming Question 1 (racket)
; Date: January 20th, 2024
; Class: CS2613

(define (my-rainbow shape1 shape2)
  ;define colors 
  (let ([colors (list "red" "orange" "yellow" "green" "blue" "purple")])
    ;get the length of the colors list
    (let ([count (length '(colors))])
      (helper shape1 shape2 count colors))))

;helper method to take in shapes and the count of the shape and the list of colors
(define (helper shape1 shape2 count colors)
  
  (cond [(empty? colors)'()]
        ;if the count is even print shape1
        [(even? count)
         (cons (colorize shape1 (first colors)) (helper shape1 shape2 (sub1 count) (rest colors)))]
        ;if the count is odd print shape2
        [(odd? count)
         (cons (colorize shape2 (first colors)) (helper shape1 shape2 (sub1 count) (rest colors)))]))

;test case 1
(define (test1)
  (my-rainbow (filled-rectangle 25 25) (filled-ellipse 25 25)))

;test case 2
(define (test2)
  (my-rainbow (filled-ellipse 20 20) (filled-rectangle 35 35)))

;test case 3
(define (test3)
  (my-rainbow (filled-rounded-rectangle 20 25) (filled-ellipse 20 40)))

;test case 4
(define (test4)
  (my-rainbow (filled-rectangle 25 25) (rectangle 25 25)))


  