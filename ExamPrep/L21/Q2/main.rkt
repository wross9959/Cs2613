
#lang racket

(define (piecewise)
  (define (piecewise-helper x)
    (if (> x 20) 
        '()       
        (cons     
         (cond    
           [(equal? (modulo x 2) 0) (/ x 2)]  
           [(equal? (modulo x 2) 1) (* x 2)]) 
         (piecewise-helper (+ x 1)))))        

  (piecewise-helper 10))


(piecewise)
