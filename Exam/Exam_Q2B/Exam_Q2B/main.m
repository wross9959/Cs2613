# CS2613: Lab 9
# Starter Code


disp("");

function retval = totalCount(fileName1, fileName2, word)

	% File reading
	data1 = fileread(fileName1);
	data2 = fileread(fileName2);
	
	% Removing White Space
	tokens1 = strsplit(data1);
	tokens2 = strsplit(data2);


	file1Amount1 = totalWordCount(tokens1, word);
	file1Amount2 = totalWordCount(tokens2, word);

	if(file1Amount1 > file1Amount2)
		disp("Input file 1:");
		disp("Word as input");
		disp(word)
		disp("Number of occerences")
		disp(file1Amount1)
		
	else
		disp("Input file 2:");
		disp("Word as input");
		disp(word);
		disp("Number of occerences");
		disp(file1Amount2);
	end;
end;


function total = totalWordCount(tokens, word)
	
	val = 0;
	for i = 1:length(tokens)
		if(length(tokens{i}) == length(word))
			for j = 1:length(tokens{i})
				if(j >= length(word) && tokens{i}(j) == word(j))
					val = val + 1;
					break;
				end;
				if(tokens{i}(j) != word(j))
					break;
				end;
			end;
			
		end;
	end;
	total = val;	
end;


totalCount("Input1.txt", "Input2.txt", "forest");