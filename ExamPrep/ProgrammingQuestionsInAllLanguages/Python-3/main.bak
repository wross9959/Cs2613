; #lang Racket
; (require racket/class)


; (define node%
;     (class object%
;         (super-new)

;         ;accessor methods
;         (define/public (get-student) student)
;         (define/public (get-next) next) 
;         (define/public (get-prev) prev) 

;         ;mutator methods
;         (define/public (set-prev new-prev) (set! prev new-prev))
;         (define/public (set-next new-next) (set! next new-next))
;     )
;     ; constructor
;     (init-field student prev next)
; )

; (define student
;     (class object%
;         (super-new)
;         (define/public (get-name) name)
;         (define/public (get-id) id)
;     )
;     (init-field name id)
; )

; (define doublyLL%
;     (class object%

;         ;returns the current number of students registered in the course.
;         (define/public (num-students)
;             (let loop ((node (send head get-next)) (num 0))
;                 (if (equals? node tail)
;                     (count)
;                     (loop (send node get-next) (add1 count))
;                 )
;             )
;         )
;         ;takes a Student object and adds it to the course in order of student ID
;         (define/public (add-student toAdd)
;             (let loop ((node head))
;                 (cond
;                     [(equals? node tail)
;                         (let ([new-node (new node% [student toadd] [prev (node-get-prev)])])
;                             (send (node-get-prev node) set-next new-node)
;                             (send node set-prev new-node))]

;                     [(< (send student get-id) (send (send node get-student) get-id))
;                     (let ([new-node (new node% [student toAdd] [prev (send node get-prev)] [next node])])
;                         (send (send node get-prev) set-next new-node)
;                         (send node set-prev new-node))]
;                     [else
;                         (loop (send node get-next))])))
                    
;         ;  takes an integer (student ID) and removes the first occurrence of that student id from the course while maintaining order
;         (define/public (remove-student)
;             (let loop ((node (send head get-next)))
;                 (cond
;                     [(eq? node tail) #f]
;                     [(= (send (send node get-student) get-id) student-id)
;                         (send (send node get-prev) set-next (send node get-next))
;                         (send (send node get-next) set-prev (send node get-prev))
;                     #t]
;                     [else (loop (send node get-next))])))
        
;         ;return a string containing all students in the class (name + id) in ascending order of id. String should be readable if printed out immediately after return
;         (define/public (print_ascend)
;             (let loop ((node (send head get-next)) (toPrint ""))
;                 (if (equals? node tail)
;                     (toPrint)
;                     (loop (send node get-next)
;                         (string-append toPrint
;                             (send (send node get-student) get-name) "-"
;                                 (number->string (send (send node get-student) "\n")))))))
                            

    
;         ; return a string containing all students in the class (name + id) in descending order of id. String should be readable if printed out immediately after return
;         (define/public (print_descend)
;         (let loop ((node (send head get-prev)) (toPrint ""))
;                 (if (equals? node head)
;                     (toPrint)
;                     (loop (send node get-prev)
;                         (string-append toPrint
;                             (send (send node get-student) get-name) "-"
;                                 (number->string (send (send node get-student) "\n")))))))
;     )
;     (init-field head tail)


; )



#lang racket
(require racket/class)

(define student%
    (class object%
        (super-new)
        (define/public (get-name) name)
        (define/public (get-id) id)
    
    (init-field name id)))

(define node%
    (class object%
        (super-new)

        ;accessor methods
        (define/public (get-student) student)
        (define/public (get-next) next) 
        (define/public (get-prev) prev) 

        ;mutator methods
        (define/public (set-prev new-prev) (set! prev new-prev))
        (define/public (set-next new-next) (set! next new-next))
    
    ; constructor
    (init-field student prev next)))




(define doublyLL%
    (class object%
      (super-new)

        ;returns the current number of students registered in the course.
        (define/public (num-students)
            (let loop ((node (send head get-next)) (num 0))
                (if (eq? node tail)
                    (count)
                    (loop (send node get-next) (add1 count))
                )
            )
        )
        ;takes a Student object and adds it to the course in order of student ID
        (define/public (add-student toAdd)
            (let loop ((node head))
                (cond
                    [(eq? node tail)
                        (let ([new-node (new node% [student toAdd] [prev (send node get-prev node)] [next node])])
                            (send (send node get-prev) set-next new-node)
                            (send node set-prev new-node))]

                    [(< (send toAdd get-id) (send (send node get-student) get-id))
                    (let ([new-node (new node% [student toAdd] [prev (send node get-prev)] [next node])])
                        (send (send node get-prev) set-next new-node)
                        (send node set-prev new-node))]
                    [else
                        (loop (send node get-next))])))
                    
        ;  takes an integer (student ID) and removes the first occurrence of that student id from the course while maintaining order
        (define/public (remove-student student-id)
            (let loop ((node (send head get-next)))
                (cond
                    [(eq? node tail) #f]
                    [(= (send (send node get-student) get-id) student-id)
                        (send (send node get-prev) set-next (send node get-next))
                        (send (send node get-next) set-prev (send node get-prev))
                    #t]
                    [else (loop (send node get-next))])))
        
        ;return a string containing all students in the class (name + id) in ascending order of id. String should be readable if printed out immediately after return
        (define/public (print_ascend)
            (let loop ((node (send head get-next)) (toPrint ""))
                (if (eq? node tail)
                    (toPrint)
                    (loop (send node get-next)
                        (string-append toPrint
                            (send student% get-name) " - "
                                (number->string (send student% get-id)) "\n")))))
                            

    
        ; return a string containing all students in the class (name + id) in descending order of id. String should be readable if printed out immediately after return
        (define/public (print_descend)
        (let loop ((node (send head get-prev)) (toPrint ""))
                (if (eq? node head)
                    (toPrint)
                    (loop (send node get-prev)
                        (string-append toPrint
                            (send (send node get-student) get-name) "-"
                               (number->string (send student% get-id)) "\n")))))
    
    (init-field head tail)))


(define (test-doubly-linked-list)
  (define head (new node% [student #f] [prev #f] [next #f]))
  (define tail (new node% [student #f] [prev head] [next #f]))
  (send head set-next tail)
  
  (define dll (new doublyLL% [head head] [tail tail]))

  (define alice (new student% [name "Alice"] [id 123]))
  (define bob (new student% [name "Bob"] [id 456]))
  (define charlie (new student% [name "Charlie"] [id 789]))

  (send dll add-student alice)
  (send dll add-student bob)
  (send dll add-student charlie)

  (printf "Number of students: ~a\n" (send dll num-students))
  (printf "Class list in ascending order by ID:\n~a" (send dll print-ascend))
  (printf "Class list in descending order by ID:\n~a" (send dll print-descend))
  
  (send dll remove-student (send bob get-id))
  (printf "After removing student with ID 456:\n")
  (printf "Number of students: ~a\n" (send dll num-students))
  (printf "Class list in ascending order by ID:\n~a" (send dll print-ascend))
  (printf "Class list in descending order by ID:\n~a" (send dll print-descend)))

(test-doubly-linked-list)