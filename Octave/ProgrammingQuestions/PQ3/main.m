disp("");
freqTableBeowulf = createFrequencyTable('Beowulf.txt');
freqTableVindication = createFrequencyTable('Vindication.txt');
determineOrigin(freqTableBeowulf, freqTableVindication, "This is the message");

function freqTable = createFrequencyTable(filePath)
  % Read the entire file into a string
  fid = fopen(filePath, 'r');
  text = fscanf(fid, '%c');
  fclose(fid);
  
  % Tokenize the text
  tokens = strsplit(text);
  
  % Create a frequency table
  uniqueTokens = unique(tokens);
  freqTable = struct();
  for i = 1:length(uniqueTokens)
    token = uniqueTokens{i};
    freqTable.(token) = sum(strcmp(tokens, token));
  end
end

function determineOrigin(freqTable1, freqTable2, text)
  tokens = strsplit(text);
  totalTokens1 = sum(structfun(@(x) x, freqTable1));
  totalTokens2 = sum(structfun(@(x) x, freqTable2));
  
  logProb1 = 0;
  logProb2 = 0;
  
  for i = 1:length(tokens)
    token = tokens{i};
    
    % Calculate the probability of each token in each text
    if isfield(freqTable1, token)
      logProb1 += log((freqTable1.(token) + 1) / (totalTokens1 + length(fieldnames(freqTable1))));
    else
      logProb1 += log(1 / (totalTokens1 + length(fieldnames(freqTable1))));
    end
    
    if isfield(freqTable2, token)
      logProb2 += log((freqTable2.(token) + 1) / (totalTokens2 + length(fieldnames(freqTable2))));
    else
      logProb2 += log(1 / (totalTokens2 + length(fieldnames(freqTable2))));
    end
  end
  
  % Determine the more likely source
  if logProb1 > logProb2
    disp('More likely written by the author of Beowulf');
  elseif logProb2 > logProb1
    disp('More likely written by Mary Wollstonecraft');
  else
    disp('Could be from either author.');
  end
end


