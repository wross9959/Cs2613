;open file
(define input-file (open-input-file "input.txt"))

; read 
(define file-content (read-line input-file))
(displayln file-content)

; close
(close-input-port input-file)

; open
(define output-file (open-output-file "output.txt"))

; write
(display "Hello, World!" output-file)

; Closing the output file
(close-output-port output-file)