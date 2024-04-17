#lang racket


(define (piecewise)
 
  (define (factorial n)
    (cond
      [(equal? n 0) 1]
      [(* n (factorial (- n 1)))]
      )
    )
  (define (piecewise-helper x)
    (if (> x 25)'() 
        (cons
         (cond [(< x 7) (factorial x)]  
               [(< x 12) (+ (/ (* x 5) 2) 1)] 
               [(< x 20) (- x)]         
               [else (* x 100)])
         (piecewise-helper (+ x 1)))))

  (piecewise-helper 3))  


(piecewise)