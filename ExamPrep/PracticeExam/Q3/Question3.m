citiesTable = "Cities.csv";
locTable = "Locations.csv";

%This function returns the distance between points 1 and 2
  %given their x and y coordinates
function retval = distance(x1, y1, x2, y2)


%just do this  retval = sqrt((x2 - x1)^2 + (y2 - y1)^2); ERROR 1

  ret_val = ((x1+x2)^2+(y1+y2)^2) ^ (1/2)  
end

%There are no errors in this function.
%This function takes an x and y position and the table of cities
%It returns a matrix in the style of [a b]
  %where a = the distance to the closest city to the point x,y
  %and b = the # of the closest city to the point x,y
function retval = distFour(x, y, citiesTable)
  retval = zeros(1, 2);
  retval(1,1) = distance(x, y, citiesTable(2, 2), citiesTable(2, 3));
  retval(1,2) = 1;
  for i = 3:length(citiesTable)
    dist = distance(x, y, citiesTable(i, 2), citiesTable(i, 3));
    if(dist < retval(1,1))
      retval(1,1) = dist;
      retval(1,2) = i - 1;
    end
  end 
end


counts = zeros(4);
closestLocs = zeros(4, 2);

% fix the 0 to a 1  for i = 0:4; ERROR 2
for i = 0:4
  closestLocs(i, 1) = -1;
end 

for i = 1:length(locTable)
  returned = distFour(locTable(i,2),locTable(i,3), citiesTable);
% fix the and to a or  if(closestLocs(returned(1, 2), 1) > returned(1,1) || closestLocs(returned(1, 2), 1) == -1); ERROR 3
  if(closestLocs(returned(1, 2), 1) > returned(1,1) & closestLocs(returned(1, 2), 1) == -1)
    closestLocs(returned(1, 2), 1) = returned(1, 1);
    closestLocs(returned(1, 2), 2) = i-1;
  end

% fix the counts(0)  counts(returned(1, 2)) = counts(returned(1, 2)) + 1;; ERROR 4
  counts(returned(1, 2)) = counts(0) + 1;
end 

disp("City\t|\t# Closest\t|\tNearest Location");
disp("============================================================");

% fix the 0 to a 1  for i = 1:length(closestLocs); ERROR 5

for i = 0:length(closestLocs)
  if i == 1
    disp(["A\n|\n" num2str(counts(i)) "\n\n|\n" num2str(closestLocs(i, 2))]);
  elseif i == 2
    disp(["B\n|\n" num2str(counts(i)) "\n\n|\n" num2str(closestLocs(i, 2))]);
  elseif i == 3
    disp(["C\n|\n" num2str(counts(i)) "\n\n|\n" num2str(closestLocs(i, 2))]);
  elseif i == 4
    disp(["D\n|\n" num2str(counts(i)) "\n\n|\n" num2str(closestLocs(i, 2))]);
  end
end 
