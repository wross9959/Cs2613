#lang racket
(require racket/class)


; Binary Search Tree Class
(define BST%
  (class object%
    (super-new)
    
    ; Access the head of the tree
    (define/public (get-head) head)

    ;Main insert method for inserting nodes in the tree
    (define/public (insert node)
      (cond
        ; Makes sure that the tree isnt empty
        [(null? (send this get-head)) (set! head node)]
        
        ; Goes into the helper method with the head
        [else (insert-help (send this get-head) node)]
        )
      )

    ; Insert helper method
    (define/public (insert-help currentNode newNode)

      ; Create two varibles rather then have the object being called

      ; gets the nodes current letter
      (let [(currentNode-letter (send currentNode get-letter))]

      ; gets the new node to adds letter
      (let [(newNode-letter (send newNode get-letter))]
        
         (cond
           
           ; checks are the letters the same
           [(string=? currentNode-letter newNode-letter)
            
            ; increase the frequency by one and do nothing else with the tree
            (send currentNode increment-frequency)]

           ; checks if the new letter is less then current node
           [(string<? newNode-letter currentNode-letter)
            
            ; if null set the next left as the new node
            (if (null? (send currentNode get-left))
                (send currentNode set-left newNode)
                
                ; if not null we keep going with the new current node as the left so we can check it with the new node being added 
                (insert-help (send currentNode get-left) newNode))]

            ; checks if the new letter is more then current node
           [(string>? newNode-letter currentNode-letter)
            
            ; if null set the next right as the new node
            (if (null? (send currentNode get-right))
                (send currentNode set-right newNode)
                
                ; if not null we keep going with the new current node as the right so we can check it with the new node being added 
                (insert-help (send currentNode get-right) newNode))]))))
     

    (define/public (print-tree)
      ; sends the head to the print help
      (send this print-tree-help (send this get-head)))

    ; print method to print in order
     (define/public (print-tree-help currentNode)

      ; checks that the node isnt null so we can print its contents
      (cond [(not (null? currentNode))

        ; gets the left value
        (send this print-tree-help (send currentNode get-left))
        
        ; get the current node letter and freq
        (printf "~a:~a\n" (send currentNode get-letter) (send currentNode get-frequency))

        ;gets the right value
        (send this print-tree-help (send currentNode get-right))]))
    
    
    
    ; constructor and make head null
    (init-field [head null])))

; the letter cllass
(define LetterNode%
  (class object%
    (super-new)

    ; get methods 
    (define/public (get-letter) letter)
    (define/public (get-left) left)
    (define/public (get-right) right)
    (define/public (get-frequency) freq)

    ; set methods
    (define/public (set-letter newLetter) (set! letter newLetter))
    (define/public (set-left newLeft) (set! left newLeft))
    (define/public (set-right newRight) (set! right newRight))
    (define/public (set-frequency newFreq) (set! freq newFreq))
    (define/public (increment-frequency) (set-frequency (add1 freq)))
    
    ; constructor
    (init-field [left null] [right null] [letter ""] [freq 1])))




; made so we can convert words to tree nodes per char
(define (word->tree word tree)
  
   ; it states to make lower case so here we convert everything to lower case
  (let ([inputList (map (lambda (x) (string-downcase (string x))) (string->list word))])

; get the char per node 
(define (charToNode inputList tree)
  (cond
    ; check if the list is not empty
    [(not (empty? inputList))
     ; send the char to the tree to be created
     (send tree insert (new LetterNode% [letter [first inputList]]))

     ; recur on the rest
     (charToNode (rest inputList) tree)]))

  ; recur
  (charToNode inputList tree)))
                          

          
;testing the stuff on the PQ3

(define my-tree (new BST%))
(word->tree "HelLloOOOO" my-tree)
(send my-tree print-tree)
  