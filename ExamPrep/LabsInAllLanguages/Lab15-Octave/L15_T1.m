#Lab 15: Task 1

f1 = @(x) x.^2;
f2 = @(x) idivide (int32(abs(x - (x/2))), 100, "fix");   
f3 = @(x, y) x != y;

function retval = f4(f1, f2, f3, value1, value2)
	retval = f3(f1(value1), f2(value2));
end

f4(f1, f2, f3, 5, 130);


