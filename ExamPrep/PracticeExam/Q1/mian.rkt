#lang racket
(define (comp x) (= x 0))
(define (subtract x y)
    (cond [(<= (length y) 0) '()]
    [else (cons (- (list-ref x 0) (list-ref y 0)) (subtract (drop x 1)
(drop y 1)))])
    )

(define (apply-compare l1 l2 func)
    (filter comp
        (subtract (map func l1) (l2)))
)
(apply-compare '(1 2 3 4) '(1 3 4 5) add1)
