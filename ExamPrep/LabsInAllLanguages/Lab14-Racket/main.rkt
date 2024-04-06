#lang racket

;task 1

;accel function
(define (accel time)
  (let ([Vi 5]
        [acc 0.5])
    (+ Vi (* acc time))))

;decel function
(define (decel time)
  (let ([Vi 32]
        [acc -0.35])
    (+ Vi (* acc time))))

;tests for task 1
;(accel 10)
;(decel 10)

;task 2

;function 1 
(define (list-60)
  (build-list 61 values))

;task 2 function 1 test
;(list-60)

;function 2 for task 2
(define (matching list1 list2 startPos)
  (cond
    [(or (>= startPos (length list1)) (>= startPos (length list2))) -1]
    [(<= (abs (- (list-ref list1 startPos) (list-ref list2 startPos)))1) startPos]
    [else (matching list1 list2 (add1 startPos))]))

;task 2 function 2 tests
;(matching '(6 2 4 7 8 9) '(1 5 7 3 7.5 9) 0)
;(matching '(6 2 4 7) '(1 5 7 3) 0)

;task 3 
;way connor wanted it
(define (same-speed accel decel times index)
  (matching (map accel times) (map decel times) index))

(same-speed accel decel (list-60) 0)



;without matching
(define (same-speed2 accel-func decel-func times)
  (same-speed-helper accel-func decel-func times 0))


(define (same-speed-helper accel-func decel-func times index)
  (cond
    [(>= index (length times)) -1]
    [(<= (abs (- (accel-func (list-ref times index)) (decel-func (list-ref times index)))) 1) index]
    [else (same-speed-helper accel-func decel-func times (add1 index))]))
;(same-speed accel decel (list-60 0))

