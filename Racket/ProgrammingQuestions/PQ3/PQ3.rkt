#lang racket
(require racket/class)



(define BST%
  (class object%
    (super-new)

    (define/public (get-head) head)
    
    (define/public (insert node)
      (cond
        [(null? (send this get-head)) (set! head node)]
        [else (insert-help (send this get-head) node)]
        )
      )
    
    (define/public (insert-help currentNode newNode)
      (cond
        [(string<? (send currentNode get-letter) (send newNode get-letter))
         (if (null? (send currentNode get-left))
             (send currentNode set-left newNode)
             (insert-help (send currentNode get-left) newNode))]
        
        [(string>? (send currentNode get-letter) (send newNode get-letter))
         (if (null? (send currentNode get-right))
             (send currentNode set-right newNode)
             (insert-help (send currentNode get-right) newNode))]))
    
     (define/public (print-tree-help currentNode)
      (when (not (null? currentNode))
        (send this print-tree-help (send currentNode get-left))
        (printf "~a\n" (send currentNode get-letter))
        (send this print-tree-help (send currentNode get-right))))
    
    (define/public (print-tree)
      (send this print-tree-help (send this get-head)))
    
    (init-field [head null])))

(define LetterNode%
  (class object%
    (super-new)
    
    (define/public (get-letter) letter)
    (define/public (get-left) left)
    (define/public (get-right) right)
    (define/public (get-frequency) freq)

    (define/public (set-letter newLetter) (set! letter newLetter))
    (define/public (set-left newLeft) (set! left newLeft))
    (define/public (set-right newRight) (set! right newRight))
    (define/public (set-frequency newFreq) (set! freq newFreq))

    
    (define/public (increment-frequency) (add1 freq))
    
    
    (init-field [left null] [right null] [letter ""] [freq 1])))

(define tree (make-object BST% null))


(send tree insert "HelLloOOOO")
(send tree print-tree)


          
   
  



;driver

(define node-F (new LetterNode% [letter "F"]))
(define node-B (new LetterNode% [letter "B"]))
(define node-E (new LetterNode% [letter "E"]))
(define node-A (new LetterNode% [letter "A"]))
(define node-C (new LetterNode% [letter "C"]))
(define node-D (new LetterNode% [letter "D"]))
(define node-G (new LetterNode% [letter "G"]))

(send tree insert node-F)
(send tree insert node-B)
(send tree insert node-G)
(send tree insert node-A)
(send tree insert node-D)
(send tree insert node-C)
(send tree insert node-E)

;print the tree
(send tree print-tree)
  