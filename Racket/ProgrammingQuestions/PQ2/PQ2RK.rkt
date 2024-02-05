#lang slideshow

;(read-lines-from-file "DataInput.txt")
(define (read-lines-from-file file-path)
  ;from example doc Racket 8.6 I/O
  (with-input-from-file file-path
     (lambda()
       (let appender ([input '()]
                      [line (read-line)])
          (cond
            [(string=? line "END") input]
              [else (appender (append input (list (if (number? (string->number line)) (string->number line) line)))
                                  (read-line))])))))




(define (switch valueList)
  (cond
    [(empty? valueList) '()]
    [(string=? (first valueList) "END") '()]
    [else
     (let* ([word (first valueList)])
       (let* ([size (second valueList)])
         (cond
           [(string=? word "SUM") (displayln (SUM (getValues (rest (rest valueList)))))]
           [(string=? word "AVG") (displayln (AVG size (getValues (rest (rest valueList)))))]
           [(string=? word "MAX") (displayln (MAX size (getValues (rest (rest valueList))) -inf.0))]
           [(string=? word "MIN") (displayln (MIN size (getValues (rest (rest valueList))) +inf.0))]
           [(string=? word "FXP") (displayln (FXP (getValues (rest (rest valueList)))))]
           [(string=? word "FPO") (displayln (FPO (getValues (rest (rest valueList)))))]
           [(string=? word "FSN") (displayln (FSN (getValues (rest (rest valueList)))))]
           [(string=? word "FCS") (displayln (FCS (getValues (rest (rest valueList)))))]
           [else '()])
         (switch (dropValues (rest valueList)))))]))

(define (getValues n)
  (cond
    [(empty? n) '()]
    [(string? (first n)) '()]
    [else (cons (first n) (getValues (rest n)))]))

(define (dropValues n)
  (cond
    [(empty? n) '()]
    [(string? (first n)) n]
    [else (dropValues (rest n))]))

;sum calc
(define (SUM values)
  (cond
    [(empty? values) 0]
    [else(+ (first values) (SUM (rest values)))]))

;avg calc
(define (AVG size values)
  (/ (SUM values) size))

;max calc
(define (MAX size values currMax)
  (cond
    [(empty? values) currMax]
    [else
     (cond
       [(> (first values) currMax) (MAX size (rest values) (first values))]
       [else (MAX size (rest values) currMax)])]))

;min calc
(define (MIN size values currMin)
  (cond
    [(empty? values) currMin]
    [else
     (cond
       [(< (first values) currMin) (MIN size (rest values) (first values))]
       [else (MIN size (rest values) currMin)])]))

;factorial calc
(define (fact n)
  (cond
    [(<= n 0) 1]
    [else
     (* n (fact (sub1 n)))]))

;fxp calc
(define (FXP values)
  (define (fxpVal z)
    (let loop ([k 0]
               [currValues '()])
      (if (= k 50)
          (SUM currValues)
          (loop (add1 k)
                (cons (/ (expt z k) (fact k))
                      currValues)))))
  (map fxpVal values))

;fpo calc
(define (FPO values)
  (define (fpoVal z)
    (let loop ([k 0]
               [currValues '()])
      (if (= k 50)
          (SUM currValues)
          (loop (add1 k)
                (cons (* k (/ (expt z k) (fact k)))
                      currValues)))))
  (map fpoVal values))

;fsn calc
(define (FSN values)
  (define (fsnVal z)
    (let loop ([k 0]
               [currValues '()])
      (if (= k 50)
          (SUM currValues)
          (loop (add1 k)
                (cons (/ (* (expt -1 k) (expt z (+ 1 (* 2 k)))) (fact (+ 1 (* 2 k))))
                      currValues)))))
  (map fsnVal values))
  
;fcs calc
(define (FCS values)
  (define (fcsVal z)
    (let loop ([k 0]
               [currValues '()])
      (if (= k 50)
          (SUM currValues)
          (loop (add1 k)
                (cons (/ (* (expt -1 k) (expt z (+ 1 (* 2 k)))) (fact (* 2 k)))
                      currValues)))))
  (map fcsVal values))
(define (process-file file)
  (switch(read-lines-from-file file)))
(define input-file "DataInput.txt")

(define results (process-file input-file))








    