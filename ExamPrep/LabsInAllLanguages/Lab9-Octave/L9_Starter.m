# CS2613: Lab 9
# Starter Code

disp("");
function retval = starterFunction()
	inputFile = fopen ("Input.txt", "r");
  	retval = {};
	while (!feof (inputFile))
		line = fgetl(inputFile);
	    if(length(retval) == 0)
		    retval(1, 1) = line;
		    retval(1, 2) = length(line);
		else
			retval(length(retval)+1, 1) = line;
		    retval(length(retval), 2) = length(line);
		end
	end
	retval(2, :) = [];
end

disp(starterFunction());

