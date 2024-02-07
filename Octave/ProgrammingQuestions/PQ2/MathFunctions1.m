
% fid=fopen('mydata.txt','r');        % open the file as stream ("binary") r access
% f=fread(fid,'*char');               % suck it up...
% f(f==',')='.';                      % turn "," into "."
% fclose(fid)                         % done with input
% fid=fopen('mydata.csv','w');        % create new file for security
% fwrite(fid,f);                      % write the new stuff out
% fid=fclose(fid);                    % and cleanup after ourselves
% clear fid f

% fid=fopen('mydata.txt','r+');       % open the file as stream ("binary") r/w access
% f=fread(fid,'*char');               % suck it up...
% f(f==',')='.';                      % turn "," into "."
% frewind(fid)                        % go back to beginning
% fwrite(fid,f);                      % write the new stuff over old file
% fid=fclose(fid);                    % and cleanup after ourselves
% clear fid f

% Value   Behavior
% ' '	    Space
% \b	    Backspace
% \n	    Newline
% \r	    Carriage return
% \t	    Horizontal tab

function main()
  % Open the input and output files
  inputFile = 'Q1Input.txt';
  outputFile = 'OQ2Output.txt';
  fid = fopen(inputFile, 'r');
  fout = fopen(outputFile, 'w');
  
  % Read and process each command until "END" is reached
  while ~feof(fid)
    command = fgetl(fid);
    if strcmp(command, 'END'), break; end
    n = str2double(fgetl(fid));
    values = zeros(n, 1);
    for i = 1:n
      values(i) = str2double(fgetl(fid));
    end
    
    % Perform calculation based on command
    switch command
      case 'SUM'
        result = sum_manual(values);
      case 'AVG'
        result = avg_manual(values);
      case 'MAX'
        result = max_manual(values);
      case 'MIN'
        result = min_manual(values);
      case 'FXP'
        result = arrayfun(@fxp, values);
      case 'FPO'
        result = arrayfun(@fpo, values);
      case 'FSN'
        result = arrayfun(@fsn, values);
      case 'FCS'
        result = arrayfun(@fcs, values);
    end
    
    % Write the result(s) to the output file
    if isscalar(result)
      fprintf(fout, '%f\n', result);
    else
      fprintf(fout, '%f\n', result);
    end
  end
  
  fclose(fid);
  fclose(fout);
end

function s = sum_manual(values)
  s = 0;
  for value = values'
    s += value;
  end
end

function a = avg_manual(values)
  a = sum_manual(values) / numel(values);
end

function m = max_manual(values)
  m = values(1);
  for value = values'
    if value > m
      m = value;
    end
  end
end

function m = min_manual(values)
  m = values(1);
  for value = values'
    if value < m
      m = value;
    end
  end
end

function y = fxp(z)
  y = sum(((z .^ (0:50)) ./ arrayfun(@factorial, 0:50)));
end

function p = fpo(z)
  p = sum(((exp(-z) * z .^ (0:50)) ./ arrayfun(@factorial, 0:50)));
end

function s = fsn(z)
  s = sum(arrayfun(@(k) ((-1)^k * z^(2*k+1)) / factorial(2*k+1), 0:50));
end

function c = fcs(z)
  c = sum(arrayfun(@(k) ((-1)^k * z^(2*k)) / factorial(2*k), 0:50));
end

% Call main function to run the program
main();
