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


function retval = naiveBayes(dictionary, token)
	tokenLength = length(dictionary.(token));
	% checks if there is a row by the name of the token to check
	if isfield(dictionary, token)
	  retval += log((dictionary.(token) + 1) / (tokenLength) + length(fieldnames(dictionary)));
	else
	  retval += log(1 / (totalTokens + length(fieldnames(dictionary))));
	end;
end;

function retval = determineOrigin(freqTable1, freqTable2, word)

	tokens = strsplit(word);
	
	for i = 1:length(tokens)
		token = tokens{i};
	end;
	%gets the probability of eachs freq table
	logProb1 = naiveBayes(freqTable1, token);
	logProb2 = naiveBayes(freqTable2, token);

	% If more word tokens in Beowulf which is freqTable1
	if logProb1 > logProb2
		disp('More likely written by the author of Beowulf');
		
	% If more word tokens in Wollstonecraft which is freqTable2
  	elseif logProb2 > logProb1
		disp('More likely written by Mary Wollstonecraft');
	% If there equal or both zero
  	else
		disp('Could be from either author.');
  	end;
end;

dictionary1 = createFrequencyTable("Beowulf.txt");
dictionary2 = createFrequencyTable("Vindication.txt");
% checkInput = input("What is the message you would like to check: ");

determineOrigin(dictionary1, dictionary2, "This is the message");