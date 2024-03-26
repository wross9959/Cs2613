#lang racket
(require racket/class)



(define 3DPoint%
  (class object%
    (super-new)
    (define/public (get-x) x)
    (define/public (get-y) y)
    (define/public (get-z) z)
    (define/public (set-x nx) (set! x nx))
    (define/public (set-y ny) (set! y ny))
    (define/public (set-z nz) (set! z nz))
    (define/public (distance other)
      (sqrt
       (+
        (expt (- x (send other get-x)) 2)
        (expt (- y (send other get-y)) 2)
        (expt (- z (send other get-z)) 2)
        )
       )
      )
        
    (define/public (distance-range other range)
      (<=
       (send this distance other) range)
      )
    (define/public (triangle-perimeter pt2 pt3)
      (+
       (send this distance pt2)
       (send this distance pt3)
       (send pt2 distance pt3)
       )
      )
    (init-field x y z)))
      

;Test Cases

(define pt1 (make-object 3DPoint% 9 3 6))
(define pt2 (make-object 3DPoint% -1 2 8))
(send pt1 distance-range pt2 11)
; result was true

(define pt3 (make-object 3DPoint% 9 3 6))
(define pt4 (make-object 3DPoint% -1 2 8))
(send pt3 distance-range pt4 10)
; result was false


;Point object creation
(define p1 (make-object 3DPoint% 1 4 2))
(define p2 (make-object 3DPoint% 5 3 7))
(define p3 (make-object 3DPoint% 5 9 6))

;printing calculations
(printf "Distance of p1 - p2: ~a\n" (send p1 distance p2))
(printf "Distance of p2 - p3: ~a\n" (send p2 distance p3))
(printf "Distance of p1 - p3: ~a\n" (send p1 distance p3))

(printf "Perimeter: ~a\n" (send p1 triangle-perimeter p2 p3))