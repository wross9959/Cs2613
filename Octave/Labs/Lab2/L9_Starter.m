# CS2613: Lab 9
# Starter Code

disp("");
function retval = starterFunction()
	inputFile = fopen ("Input.txt", "r");
  	retval = {};
	while (!feof (inputFile))
		line = fgetl(inputFile);
		letter = mostCommon(countLetters(line));
		count = mostCommonCount(countLetters(line));
	    if(length(retval) == 0)
			
		    retval(1, 1) = letter;
		    retval(1, 2) = count;
		else
			retval(length(retval)+1, 1) = letter;
		    retval(length(retval), 2) = count;
		end
	end
	retval(2, :) = [];
end

function most = mostCommon(line)
	greatestNum = max(line);
	[row,col] = find(line==greatestNum, 1,'first');

	most = (native2unicode((col + 96), 'ASCII'));
end;
function count = mostCommonCount(line)
	greatestNum = max(line);
	count = greatestNum
end;
%method from task1
function sum = countLetters(text)
    newStr = lower(text);
    letterCount = zeros(1, 26);

    for (i = 1:length(newStr))
        curr = newStr(i);
        currAscii = double(curr);
        if(currAscii > 96 && currAscii < 123)
            currAscii = currAscii - 96;
            letterCount(currAscii) = letterCount(currAscii) + 1;
        end;

    end;
    sum = letterCount;
end;

disp((starterFunction()));


