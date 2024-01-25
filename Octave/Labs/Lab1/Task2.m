vector = [];

vectorLength = input("How many values would you like to input: ");

for i = 1: vectorLength
    vector(i) = input("");
end 

function  n = unitVector(vector)
    vectorToReturn = [];
    bottomToSqrt = 0;
    orinatation = iscolumn(vector);
    numOfZero = 0;

    if(orinatation == 1)
        vector = transpose(vector);
    else
        for i = 1: length(vector)

            bottomToSqrt = (bottomToSqrt + (vector(i))^2);

            if(vector(i) == 0)

                numOfZero = numOfZero + 1;

            endif
        end

        if(numOfZero == length(vector))

            n = vector;

        endif
        bottom = sqrt(bottomToSqrt);

        for i = 1: length(vector) 
            vectorToReturn(i) = vector(i)/bottom;
        end

        n = vectorToReturn;
    end
end

display(unitVector(vector));