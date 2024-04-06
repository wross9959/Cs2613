#lang racket



(define (isPalindrome input)
  (let ([word (string-downcase input)])
    (cond
      [
       (<= (string-length word) 1)
       #t]
      [
       (not(equal? (string-ref word 0) (string-ref word (sub1 (string-length word)))))
       #f]
      [else
       (isPalindrome substring (word (string-ref word 0) (string-ref word (sub1 (string-length word)))))])))
       

    
(isPalindrome "o")
(isPalindrome "1o")
(isPalindrome "racecar")





(define (cipherold word key startPos)
  (for/list ([i word])
      (integer->char (+ key (char->integer i)))))

    
(list->string (cipherold "abcde" 8 0))

;“ijklm”

(list->string (cipherold "secret message" 10 0))

;“}om|o~*wo}}kqo”

(list->string (cipherold "Message" 3 0))
;"phvvdjh"
(list->string (cipherold "UPPERCASE" 26 0))
;"phvvdjh"

(list->string (cipherold "123456" -4 0))
;"phvvdjh"



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
