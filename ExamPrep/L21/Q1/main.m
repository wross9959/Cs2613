f1 = @(x, y) tolower(x)(y);
f2 = @(x, y) tolower(x)(length(x) + 1 - y);
f3 = @(x, y) x == y;


function retval = f4(m, f1, f2, f3)
    count = 0;
    range = 0;
    %mod is modulo division. Example: length(m) % 2 is equal to mod(length(m), 2)
    if(mod(length(m), 2) == 0)
        range = length(m)/2;
    else
        range = int32(length(m)/2)+1;
    end

    for i = 1:range
        if(f3(f1(m, i), f2(m, i)))
            count = count + 1;
        end
    end
    retval = count;
end


disp(f4("hello", f1, f2, f3));
disp(f4("bonjour!", f1, f2, f3));
disp(f4("781380485687", f1, f2, f3));
