#lang racket
(require racket/class)

(define point% (class object%
                   (super-new)
                 (define/public (distance other) (+ (expt (- x (other.x)) 2) (expt (- y (other.y)) 2)))
                 (define/public (set-x nx) (= x nx))
                 (define/public (set-y ny) (= y ny))
                   (init-field x y)))

(define p1 (make-object point% 9 3))
(define p2 (make-object point% -1 2))
(send p1 distance p2) 
