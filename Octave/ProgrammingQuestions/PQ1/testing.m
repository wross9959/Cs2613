clear; clc
[city, x_city, y_city] = textread('Cities.csv',...
             '%s %f %f',...
             'delimiter', ',',...
             'headerlines',1);

[locationNum, x_loc, y_loc] = textread('Locations.csv',...
             '%d %f %f',...
             'delimiter', ',',...
             'headerlines',1);


% Displaying the city results // testing
%for i = 1:length(city)
%    fprintf('%s: (%f, %f)\n', city{i}, x(i), y(i));
%end
% Displaying the location results // testing
%for i = 1:length(locationNum)
%    fprintf('%d: (%f, %f)\n', locationNum(i), x2(i), y2(i));
%end
numCities = length(city);
numLocations = length(locationNum);
closestCounts = zeros(numCities, 1);
nearestLocation = zeros(numCities, 1);
nearestDistance = inf(numCities, 1);

for i = 1:numLocations
    locX = x_loc(i);
    locY = y_loc(i);
    closestCity = 0;
    minDist = inf;

    for j = 1:numCities
        dist = sqrt((locX - x_city(j))^2 + (locY - y_city(j))^2);
        if dist < minDist
            minDist = dist;
            closestCity = j;
        end
    end

    closestCounts(closestCity) += 1;
    if minDist < nearestDistance(closestCity)
        nearestDistance(closestCity) = minDist;
        nearestLocation(closestCity) = locationNum(i);
    end
end



fprintf('| City | # Closest | Nearest Location\n');
fprintf('===================================\n');
for i = 1:numCities
    fprintf('%s \t| %d \t| %d\n', city{i}, closestCounts(i), nearestLocation(i));
end
