#lang racket

(require racket/class)

(define animal%
    (class object%
        (super-new)
        (define/public (get-name) name)
        (define/public (get-freq) freq)
        (define/public (set-freq) (set! freq (add1 freq)))
      
    
    (init-field name [freq 0])))

(define AnimalNode%
    (class object%
        (super-new)

        ;accessor methods
        (define/public (get-animal) animal)
        (define/public (get-next) next) 
        (define/public (get-prev) prev) 

        ;mutator methods
        (define/public (set-prev new-prev) (set! prev new-prev))
        (define/public (set-next new-next) (set! next new-next))
    
    ; constructor
    (init-field [animal null] [prev null] [next null])))

(define AnimalList%
    (class object%
      (super-new)

      ;Accessors
      (define/public (get-head) head)
      (define/public (get-tail) tail)

      ;Mutators
      (define/public (set-head new-head) (set! head new-head))
      (define/public (set-tail new-tail) (set! tail new-tail))


      ;Other needed methods
      (define/public (add-animal animal)
        ;create a 
        (define node (new AnimalNode% [animal animal]))
        (define currentNode (send this get-head))
        (cond
          [(and (null? (send this get-head)) (null? (send this get-tail)))
           (send this set-head node)
           (send this set-tail node)]
          [else
           (send this add-animal-helper currentNode node)]))



      (define/public (add-animal-helper currentNode toAdd)
        
        (cond
          ; loop to find proper spot
          [(and (not (null? currentNode)) (string<? (send (send currentNode get-animal) get-name) (send (send toAdd get-animal) get-name)))
           (add-animal-helper (send currentNode get-next) toAdd)
           ]
          [(and (not (null? currentNode)) (string=? (send (send currentNode get-animal) get-name) (send (send toAdd get-animal) get-name)))
           (send (send currentNode get-animal) set-freq)
           ]
          
          [else
            (cond
              
              ; if we are at the end of the list add at the tail
              [(null? currentNode)
               (send (send this get-tail) set-next toAdd)
               (send toAdd set-prev (send this get-tail))
               (send this set-tail toAdd)
               ]

              ; if we are at the start of the list add at the head
              [(null? (send currentNode get-prev))
               (send toAdd set-next (send this get-head))
               (send (send this get-head) set-prev toAdd)
               (send this set-head toAdd)
               ]
                
              ; Adding in between two nodes in the list
              [else
               (send toAdd set-next currentNode)
               (send toAdd set-prev (send currentNode get-prev))
               (send (send currentNode get-prev) set-next toAdd)
               (send currentNode set-prev toAdd)
               ]
              )
            ]
          )
        )
      ;writing to file
      (define (write-file f str)
        (define (wt) (printf "~a\n" str))
        (with-output-to-file f wt #:mode 'text #:exists 'append))
      
      
      (define/public (print)
        (define (print-animal-helper current)
          (cond
            [(not (null? current))
             (printf "~a:~a\n" (send (send current get-animal) get-name) (send (send current get-animal) get-freq))
             (print-animal-helper (send current get-next))]))
        (print-animal-helper (send this get-head)))

      (define/public (print-to-file)
        (define (print-animal-helper current)
          (cond
            [(not (null? current))
             (write-file "Animals.txt" (string-append (~v (send (send current get-animal) get-name) (send (send current get-animal) get-freq))))
             (print-animal-helper (send current get-next))]))
        (print-animal-helper (send this get-head)))
      
      

      (init-field [head null] [tail null])))


(define my-list (new AnimalList%))

(send my-list add-animal (new animal% [name "Bear"]))
(send my-list add-animal (new animal% [name "Dolphin"]))
(send my-list add-animal (new animal% [name "Elephant"]))
(send my-list add-animal (new animal% [name "Bear"]))
(send my-list add-animal (new animal% [name "Aardvark"]))
(send my-list add-animal (new animal% [name "Chicken"]))
(send my-list add-animal (new animal% [name "Chicken"]))
(send my-list add-animal (new animal% [name "Dolphin"]))


(send my-list print)

(send my-list print-to-file)






