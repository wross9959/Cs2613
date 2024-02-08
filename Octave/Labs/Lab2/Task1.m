disp("")

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
disp(countLetters("Hello Programming Languages Lab!"));