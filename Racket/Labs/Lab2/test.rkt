#lang racket

(define (cipfher word key startPos)
  (for/list ([i word])
      (integer->char (+ key (char->integer i)))))

     



(define (cipher word key startPos)
  (cond [(equal? (string-length word) startPos)'()]
        [else
           (cons (integer->char (+ key (char->integer (string-ref word startPos)))) (cipher word key (add1 startPos)))]))



(list->string (cipher "abcde" 8 0))
;“ijklm”

(list->string (cipher "secret message" 10 0))
;“}om|o~*wo}}kqo”

(list->string (cipher "Message" 3 0))
;"phvvdjh"

(list->string (cipher "UPPERCASE" 26 0))
;"phvvdjh"

(list->string (cipher "123456" -4 0))
;"phvvdjh"