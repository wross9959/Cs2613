#lang racket

(define func1
  (lambda (x) (* x 2)))

(define func2
  (lambda (x) (string-ref x (floor (/ (string-length x) 2)))))

(define func3
  (lambda (x) (and (> x 0) (odd? x))))

(define func4
  (lambda (x) (member (string-ref x 0) (string->list "A E I O U a e i o u"))))


(define test1
  (map func1 `(8,10,7.5)))

(define test2
  (map func2 `("Hello!", "CompSci2613", "Lab-12")))

(define test3
  (filter func3 `(-15, -4, 0, 4, 23, 64, 101, 104, 123)))

(define test4
  (filter func4 `("alice", "bob", "Carl", "daisy", "Earl")))

