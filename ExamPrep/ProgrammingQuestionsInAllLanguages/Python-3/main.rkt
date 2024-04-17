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
    (init-field [student null] [prev null] [next null])))

(define doublyLL%
    (class object%
      (super-new)

      ;Accessors
      (define/public (num-students) count)
      (define/public (get-head) head)
      (define/public (get-tail) tail)

      ;Mutators
      (define/public (set-head new-head) (set! head new-head))
      (define/public (set-tail new-tail) (set! tail new-tail))


      ;Other needed methods
      (define/public (add-student student)
        ;create a 
        (define node (new node% [student student]))
        (define currentNode (send this get-head))
        (cond
          [(equal? (send this num-students) 0)
           (send this set-head node)
           (send this set-tail node)
           (set! count (add1 count))]
          [else
           (send this add-student-helper currentNode node)]))



      (define/public (add-student-helper currentNode toAdd)
        
        (cond
          ; loop to find proper spot
          [(and (not (null? currentNode)) ( < (send (send currentNode get-student) get-id) (send (send toAdd get-student) get-id)))
           (add-student-helper (send currentNode get-next) toAdd)
           ]
          
          [else
            (cond
              
              ; if we are at the end of the list add at the tail
              [(null? currentNode)
               (send (send this get-tail) set-next toAdd)
               (send toAdd set-prev (send this get-tail))
               (send this set-tail toAdd)
               (set! count (add1 count))
               ]

              ; if we are at the start of the list add at the head
              [(null? (send currentNode get-prev))
               (send toAdd set-next (send this get-head))
               (send (send this get-head) set-prev toAdd)
               (send this set-head toAdd)
               (set! count (add1 count))
               ]
                
              ; Adding in between two nodes in the list
              [else
               (send toAdd set-next currentNode)
               (send toAdd set-prev (send currentNode get-prev))
               (send (send currentNode get-prev) set-next toAdd)
               (send currentNode set-prev toAdd)
               (set! count (add1 count))
               ]
              )
            ]
          )
        )
      
      ; Remove method
      (define/public (remove-student student-id)
        (cond
          ; checks that there is at least one student
          [(equal? (send this num-students) 0) #f]
          
          [else
           (define currentNode (send this get-head))
           (send this remove-student-helper currentNode student-id)]))

      (define/public (remove-student-helper currentNode student-id)
        (cond
          [(not (null? currentNode))
           (cond
             [(equal? (send (send currentNode get-student) get-id) student-id)
              (cond
                ; if there is only one student
                [(equal? (send this get-head) (send this get-tail))
                 (send this set-head null)
                 (send this set-tail null)
                 ]

                ; if the student at the front of the list
                [(equal? currentNode (send this get-head))
                 (send this set-head (send currentNode get-next))
                 (send (send this get-head) set-prev null)
                 ]

                ; if the student is at the end of the list
                [(equal? currentNode (send this get-tail))
                  (send this set-tail (send currentNode get-prev))
                  (send (send this get-tail) set-next null)
                 ]

                ; if the student is in the middle of the list
                [else
                 (
                  (send (send (send currentNode get-prev) get-next) set-next (send currentNode get-next))
                  (send (send (send currentNode get-next) get-prev) set-prev (send currentNode get-prev))
                  )
                ]     
                )
              (set! count (sub1 count)) #t]
             [else (remove-student-helper (send currentNode get-next) student-id)]
             )
           ]
          )
        )           
      (define/public (print-ascend)
        (define (print-students-helper current)
          (cond
            [(not (null? current))
             (displayln (send (send current get-student) get-name))
             (print-students-helper (send current get-next))]))
        (print-students-helper (send this get-head)))

      (define/public (print-descend)
        (define (print-students-helper current)
          (cond
            [(not (null? current))
             (displayln (send (send current get-student) get-name))
             (print-students-helper (send current get-prev))]))
        (print-students-helper (send this get-tail)))
      
    (init-field [head null] [tail null] [count 0])))


(define my-list (new doublyLL%))

(send my-list add-student (new student% [name "Student A"] [id 1]))
(send my-list add-student (new student% [name "Student C"] [id 3]))
(send my-list add-student (new student% [name "Student B"] [id 2]))

(send my-list print-ascend)
(send my-list print-descend)
(send my-list num-students)

; Remove Student C
(send my-list remove-student 3)
(send my-list print-ascend)
(send my-list print-descend)
(send my-list num-students)

; Remove Student A
(send my-list remove-student 1)
(send my-list print-ascend)
(send my-list print-descend)
(send my-list num-students)

; Add student D
(send my-list add-student (new student% [name "Student D"] [id 4]))
(send my-list print-ascend)
(send my-list print-descend)
(send my-list num-students)

; Remove Student B
(send my-list remove-student 2)
(send my-list print-ascend)
(send my-list print-descend)
(send my-list num-students)

