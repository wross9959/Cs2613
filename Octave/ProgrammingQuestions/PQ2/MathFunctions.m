
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





file = textread('dataInput.txt','%s','Newline','')
functionArray = [];
inputValues = [];
numberOfValues = [];
functionArrayIndex = 1;
%feed in the function operator
%feed in the number of values index + 1
%feed in the inputValues of i -> i + number of values
index = 1
while(index <= size(file))
    functionArray(functionArrayIndex) = file(index);
    numberOfValues(functionArrayIndex) = str2num(file(index + 1));

    for(i = numberOfValues(functionArrayIndex))
        inputValues(i) = str2double(file(index + 2));
    end;

    index = numberOfValues(functionArrayIndex) + 2;
    functionArrayIndex = functionArrayIndex + 1;

end;





function output  = SUM(values)

    for(i = values)
        output +=  values(i);
    end;

end;

function output  = AVG(values)
    sum_of_values = SUM(values);
    output = sum_of_values /  SIZE(values);
end;

function output  = MAX(values)

    max_value = values(1);
    for i = 2:values
        if(max_value < values(i))
            max_value = values(i);
        end;
    end;
    output = max_value;
end;

function output  = MIN(values)
    min_value = values(1);
    for i = 2:values
        if(min_value > values(i))
            min_value = values(i);
        end;
    end;
    output = min_value;

end;

function output  = FXP(values)


end;

function output  = FPO(values)


end;

function output  = FSN(values)


end;

function output  = FCS(values)


end;
