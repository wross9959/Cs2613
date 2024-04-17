disp("")

function toReturn = uniqueChar(string)
    toReturn = "";

    for i = 1:length(string)

        curr = string(i);
        isUnique = true;

        for j = 1:i-1
            if (string(j) == curr)

                isUnique = false;
                break;

            end;
        end;
        if isUnique
            toReturn = [toReturn, curr];

        end;
    end;
end;

result = uniqueChar("This is a test input for testing octave out");
disp(result)