%	@Author:	Will Ross #3734692
%	Date:		February 17th, 2024
%	Class:		Cs2613
%	Assesment:	Programming Question 8 (Octave 2)

%	Tests: PASS


% First line cant be a function
disp("");

% clear the file writing to
function retval = clearFile()
	fileID = fopen('DataOutput.txt', 'w');
	fprintf(fileID,"\n");
	fclose(fileID);
end;
% Function that reads in the file and sends the output to its proper functions
function retval = fileRead()
	% File name
	data = fileread('DataInput.txt');
	% Removing White Space
	data = strsplit(data);

	% Get i ready for indexing all values
	i = 1;
	
	while(i < length(data))

		% Sets the first value to the operator
		operator = data{i};

		% Checks next value to get the amount of values
		numOfInputs = str2num(data{i+1});

		% Gets the starting values by indexing twice
		startNum = i + 2;

		% Gets the last value by the amount of values + 1 (we add one because arrays start at 1 not 0)
		endNum = i + numOfInputs + 1;

		% gets the nums using our indexs
		nums = data(startNum:endNum);

		% sends the data to be converted to doubles and to the switch to choose which operation to complete
		switchCheck(operator, string2Double(numOfInputs, nums), numOfInputs);

		% End of current operation 
		i += numOfInputs + 2;
	end;  
end;

% gets the sum
function retval = Sum(values)
	retval = 0;
	% Adds all values up for sum
	for i = 1:length(values)
		retval += values(i);
	end;
end;

% gets the average
function retval = Avg(values, len)
	% Gets sum and divides by num of characters
	retval = Sum(values) / len;
end

% gets max
function retval = Max(values)
	% Sets first value to max
	retval = values(1);
	% For loop starts at two and compares all values
	for i = 2:length(values)
		if (values(i) > retval)
			retval = values(i);
		end;
	end;
end;

% gets min
function retval = Min(values)

	% Sets first value to max
	retval = values(1);
	% For loop starts at two and compares all values
	for i = 2:length(values)
		if (values(i) < retval)
			retval = values(i);
		end;
	end;
end;

% factorial function
function f = Factorial(n)
	if (n <= 1)
		f = 1;
	else
		f = n * Factorial(n - 1);
	endif
endfunction

% FXP array function
function retval  = FXP(values)

	% get retval ready
	retval = (1:length(values));
	for z = 1:length(values)
		curr = [];
		
		% gets the 50 values
		for k = 1:50
			curr(k) = ((z**k) / (Factorial(k)));
		end;
		
		% gets the sum of all 50 values
		retval(z) = Sum(curr) + 1;
	end;
end;

% FPO array function
function retval  = FPO(values)

	% get retval ready
	retval = (1:length(values));
	for z = 1:length(values)
		curr = [];
		
		% gets the 50 values
		for k = 1:50
			curr(k) = ((k * (z**k)) / (Factorial(k)));
		end;
		
		% gets the sum of all 50 values
		retval(z) = Sum(curr) + 1;
	end;
end;

% FSN array function
function retval  = FSN(values)

	% get retval ready
	retval = (1:length(values)); 
	for z = 1:length(values)
		curr = [];
		
		% gets the 50 values
		for k = 1:50
			curr(k) = ((((-1)**k) * ((z)**((2*k) + 1)))/(Factorial((2*k) + 1)));
		end;
		% gets the sum of all 50 values
		retval(z) = Sum(curr) + 1;
	end;
end;

% FCS array function
function retval  = FCS(values)

	% get retval ready
	retval = (1:length(values));
	for z = 1:length(values)
		curr = [];
		
		% gets the 50 values
		for k = 1:50
			curr(k) = ((((-1)**k) * ((z)**(2*k)))/(Factorial(2*k)));
		end;
		% gets the sum of all 50 values
		retval(z) = Sum(curr) + 1;
	end;
end;

% converts strings to doubles
function retval = string2Double(numOfInputs, nums)
	retval = zeros(1 : numOfInputs);
	retval = str2double(nums);
end;

% Writes the arrays to a new doc
function retval = printVal(operator, num)
	fileID = fopen('DataOutput.txt', 'a');
	fprintf(fileID,"%s:", operator);
	fprintf(fileID,"%f:\n", num);
	fclose(fileID);
end;

% Writes the arrays to a new doc
function retval = printArray(operator, nums)
	fileID = fopen('DataOutput.txt', 'a');
	fprintf(fileID,"%s:\n", operator);
	for i = 1:length(nums)
		fprintf(fileID,"%d: %f\n",i, nums(i));
	end;
	
	fclose(fileID);
end;

% checks the values by there operator
function retval = switchCheck(operator, nums, numOfInputs)
	retArray = zeros(1: length(nums));
	switch(operator)
	case "SUM"
		retval = Sum(nums);
		printVal(operator, retval);
	
	case "AVG"
		retval = Avg(nums, numOfInputs);
		printVal(operator, retval);
	
	case "MAX"
		retval = Max(nums);
		printVal(operator, retval);
	
	case "MIN"
		retval = Min(nums);
		printVal(operator, retval);
	
	case "FXP"
		retArray = FXP(nums);
		printArray(operator, retArray);
	
	case "FPO"
		retArray = FPO(nums);
		printArray(operator, retArray);
	
	case "FSN"
		retArray = FSN(nums);
		printArray(operator, retArray);
	
	case "FCS"
		retArray = FCS(nums);
		printArray(operator, retArray);
	end;
end;

% Clear the file so it doesnt have duplicates
clearFile();

% runs the program
fileRead();