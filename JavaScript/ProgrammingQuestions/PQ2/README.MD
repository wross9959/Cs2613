All information below is from https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
~~~~~~~~~~~~~~~~~~~~~~~~~

required for opening files
var fs = require("fs");

~~~~~~~~~~~~~~~~~~~~~~~~~~

getting info about file 
fs.stat(path, callback)

~~~~~~~~~~~~~~~~~~~~~~~~~~
info

path:
This is the string having file name including path

callback:
This is the callback function which gets two arguments 
(err, stats) where stats is an object of fs.Stats type which is 
printed below in the example

~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Methods we can use

1
stats.isFile()
Returns true if file type of a simple file.

2
stats.isDirectory()
Returns true if file type of a directory.

3	
stats.isBlockDevice()
Returns true if file type of a block device.

4	
stats.isCharacterDevice()
Returns true if file type of a character device.

5	
stats.isSymbolicLink()
Returns true if file type of a symbolic link.

6	
stats.isFIFO()
Returns true if file type of a FIFO.

7	
stats.isSocket()
Returns true if file type of asocket.

~~~~~~~~~~~~~~~~~~~~~~~~
For writing to a file

fs.writeFile(filename, data[, options], callback)


info 
path:
This is the string having the file name including path.

data: 
This is the String or Buffer to be written into the file.

options:
The third parameter is an object which will hold 
{encoding, mode, flag}. By default. encoding is utf8, mode is 
octal value 0666. and flag is 'w'

callback:
This is the callback function which gets a single 
parameter err that returns an error in case of any writing error.

            OUTPUT NEEDED
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
SUM Results:
#:	15
AVG Results:
#:	3
MAX Results:
#:	5
MIN Results:
#:	1
FXP Results:
1:	2.7182818284590455
2:	7.389056098930649
3:	20.08553692318766
4:	54.598150033144265
5:	148.41315910257657
FPO Results:
1:	2.7182818284590455
2:	14.778112197861297
3:	60.25661076956301
4:	218.39260013257706
5:	742.065795512883
FSN Results:
1:	0.8414709848078965
2:	0.9092974268256817
3:	0.1411200080598671
4:	-0.7568024953079275
5:	-0.9589242746631357
FCS Results:
1:	0.5403023058681397
2:	-0.41614683654714246
3:	-0.9899924966004455
4:	-0.6536436208636125
5:	0.28366218546322675



        OUR OUTPUT (Match)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

SUM Results:
#:	15
AVG Results:
#:	3
MAX Results:
#:	5
MIN Results:
#:	1
FXP Results:
1:	2.7182818284590455
2:	7.389056098930649
3:	20.08553692318766
4:	54.598150033144265
5:	148.41315910257657
FPO Results:
1:	2.7182818284590455
2:	14.778112197861297
3:	60.25661076956301
4:	218.39260013257706
5:	742.065795512883
FSN Results:
1:	0.8414709848078965
2:	0.9092974268256817
3:	0.1411200080598671
4:	-0.7568024953079275
5:	-0.9589242746631357
FCS Results:
1:	0.5403023058681397
2:	-0.41614683654714246
3:	-0.9899924966004455
4:	-0.6536436208636125
5:	0.28366218546322675
