#lang racket


;(read-lines-from-file "DataInput.txt")
(define (read-lines-from-file file-path)
  ;from example doc Racket chapter 8.6 I/O
  (with-input-from-file file-path
     (lambda()
       (let appender ([input '()][line (read-line)])
          (cond
            [(string=? line "END") input]
            [else (appender (append input (list (if (number? (string->number line)) (string->number line) line))) (read-line))])))))

;clearing output file
(define (clear-file f)
  (define (wt) (printf "~a" ""))
  (with-output-to-file f wt #:mode 'text #:exists 'replace))

;writing to file
(define (write-file f str)
  (define (wt) (printf "~a\n" str))
  (with-output-to-file f wt #:mode 'text #:exists 'append))

;Switch statement for choosing which operator it is
(define (switch values)
  (cond
    ;check if values are empty
    [(empty? values) '()]
    ;checks if the command is end 
    [(string=? (first values) "END") '()]
    ;if not the end and not empty
    [else
     ;first input = operator
     (let* ([operation (first values)])
       ;second how many values
       (let* ([length (second values)])
         (cond
           [(string=? operation "SUM") (write-file "DataOutput.txt" (string-append "SUM: " (~v (SUM (getValues (rest (rest values)))))))]
           [(string=? operation "AVG") (write-file "DataOutput.txt" (string-append "AVG: " (~v (AVG length (getValues (rest (rest values)))))))]
           [(string=? operation "MAX") (write-file "DataOutput.txt" (string-append "MAX: " (~v (MAX length (getValues (rest (rest values))) -inf.0))))]
           [(string=? operation "MIN") (write-file "DataOutput.txt" (string-append "MIN: " (~v (MIN length (getValues (rest (rest values))) +inf.0))))]
           [(string=? operation "FXP") (write-file "DataOutput.txt" (string-append "FXP: " (~v (FXP (getValues (rest (rest values)))))))]
           [(string=? operation "FPO") (write-file "DataOutput.txt" (string-append "FPO: " (~v (FPO (getValues (rest (rest values)))))))]
           [(string=? operation "FSN") (write-file "DataOutput.txt" (string-append "FSN: " (~v (FSN (getValues (rest (rest values)))))))]
           [(string=? operation "FCS") (write-file "DataOutput.txt" (string-append "FCS: " (~v (FCS (getValues (rest (rest values)))))))]
           ;return empty string if nothing
           [else '()])
         ;call again until no more values and hits a base case
         (switch (dropValues (rest values)))))]))

;gets values for the current operator 
(define (getValues n)
  (cond
    [(empty? n) '()]
    [(string? (first n)) '()]
    [else (cons (first n) (getValues (rest n)))]))

;drops the values 
(define (dropValues n)
  (cond
    [(empty? n) '()]
    [(string? (first n)) n]
    [else (dropValues (rest n))]))

;SUM calc
(define (SUM values)
  (cond
    [(empty? values) 0]
    [else(+ (first values) (SUM (rest values)))]))

;AVG calc
(define (AVG size values)
  (/ (SUM values) size))

;MAX calc
(define (MAX size values currMax)
  (cond
    [(empty? values) currMax]
    [else
     (cond
       [(> (first values) currMax) (MAX size (rest values) (first values))]
       [else (MAX size (rest values) currMax)])]))

;MIN calc
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

;FXP calc
(define (FXP values)
  (define (fxpVal z)
    (let loop ([k 0][currValues '()])
      (if (= k 50)
          (SUM currValues)
          (loop (add1 k)
                (cons (/ (expt z k) (fact k))currValues)))))
  (map fxpVal values))

;FPO calc
(define (FPO values)
  (define (fpoVal z)
    (let loop ([k 0][currValues '()])
      (if (= k 50)
          (SUM currValues)
          (loop (add1 k)
                (cons (* k (/ (expt z k) (fact k))) currValues)))))
  (map fpoVal values))

;FSN calc
(define (FSN values)
  (define (fsnVal z)
    (let loop ([k 0][currValues '()])
      (if (= k 50)
          (SUM currValues)
          (loop (add1 k)
                (cons (/ (* (expt -1 k) (expt z (+ 1 (* 2 k)))) (fact (+ 1 (* 2 k)))) currValues)))))
  (map fsnVal values))
  
;FCS calc
(define (FCS values)
  (define (fcsVal z)
    (let loop ([k 0][currValues '()])
      (if (= k 50)
          (SUM currValues)
          (loop (add1 k)
                (cons (/ (* (expt -1 k) (expt z (+ 1 (* 2 k)))) (fact (* 2 k)))currValues)))))
  (map fcsVal values))


;call the clear file function so we dont have repeated output
(clear-file "DataOutput.txt")

;gets the file and reads the lines from the file and feeds it into our operators
(define (process-file file)
  (switch(read-lines-from-file file)))

;varible for the datainput file name
(define input-file "DataInput.txt")

(define results (process-file input-file))








    