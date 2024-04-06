disp("");

function retval = createFrequencyTable(fileName)

	% File name
	data = fileread(fileName);
	
	
	% Removing White Space
	tokens = strsplit(data);
	
	%get unique tokens in the input file
	uniqueTokens = unique(tokens);
	
	%create the basic structure to return with values
	retval = struct();
	
	for i = 1:length(uniqueTokens)
		%gets the amount of time each token is repeated and plugs into the freq table
		curr = uniqueTokens{i};
		retval.(curr) = sum(strcmp(tokens, curr));
		
	end;
end;




function determineOrigin(freqTable1, freqTable2, word)

	tokens = strsplit(word);

	%gets the probability of eachs freq table
	prob1 = naiveBayes(freqTable1, tokens);
	prob2 = naiveBayes(freqTable2, tokens);

	% If more word tokens in Beowulf which is freqTable1
	if prob1 > prob2
		disp('More likely written by the author of Beowulf');
		
	% If more word tokens in Vindication which is freqTable2
  	elseif prob1 < prob2
		disp('More likely written by the author of Vindication');
		
	% If there equal or both zero
  	else
		disp('Could be from either author.');
  	end;
end;

function retval = naiveBayes(dictionary, tokens)

	retval = 0;
	tokenLength = length(fieldnames(dictionary));
	total = getTotalCount(dictionary);

	% checks if there is a row by the name of the token to check
	for i = 1:length(tokens)

		% gets the current word in the token struct
		curr = tokens{i};

		%checks if the word even exists in the dictionary
		if isfield(dictionary, curr)

			%updated te formula for naiveBayesas per feedback
		  retval += (dictionary.(curr)/ total);
		end;
	end;
end;

%function to get the total count of the words in the current book
function retval = getTotalCount(dictionary)
	retval = 0;
	word = fieldnames(dictionary);

	%words
	for i = 1:length(word)
		retval = retval + dictionary.(word{i});
	end;
end;

checkInput = input("What is the message you would like to check: ", "s");

determineOrigin(createFrequencyTable("Beowulf.txt"), createFrequencyTable("Vindication.txt"), checkInput);