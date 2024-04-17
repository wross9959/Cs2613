f1 = @(x) x^2;

function retval = summ(func, lst)
    retval = 0;
    for i = 1:length(lst)
        retval = retval + func(lst(i));
    end
end

list = [1,2,3,4];
summ(f1, list)