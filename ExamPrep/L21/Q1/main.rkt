(define (subtract x y)
    (cond [(<= (length y) 0) '()]
    [else (cons (- (list-ref x 0) (list-ref y 0)) (subtract (drop x 1) (drop y 1)))])
)

(define (fun1 x) (/ x 3))
(define (fun2 x) (sqrt (+ x 1)))
(define (fun3 x) (>= x 0))

(define (fun4 a b c d e) (filter c (subtract (map a d) (map b e))))

(fun4 fun1 fun2 fun3 '(60 30 120 9) '(0 3 8 24))