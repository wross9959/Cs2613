% @author Will Ross #3734692
% Assesment: Octave PQ1 used for PQ4
% Date: Jan 25th 2024
% Class: Cs2613
clear; clc
[city, x_city, y_city] = textread('Cities.csv',...
             '%s %f %f',...
             'delimiter', ',',...
             'headerlines',1);

[locationNum, x_loc, y_loc] = textread('Locations.csv',...
             '%d %f %f',...
             'delimiter', ',',...
             'headerlines',1);


numOfCities = length(city);
numOfLocations = length(locationNum);
closestCities = zeros(numOfCities, 1);
nearestLocation = zeros(numOfCities, 1);
nearestDistance = inf(numOfCities, 1);

for i = 1:numOfLocations
    locX = x_loc(i);
    locY = y_loc(i);
    closestCity = 0;
    minDist = inf;

    for j = 1:numOfCities
        dist = sqrt((locX - x_city(j))^2 + (locY - y_city(j))^2);
        if dist < minDist
            minDist = dist;
            closestCity = j;
        end
    end

    closestCities(closestCity) = closestCities(closestCity) + 1;
    if minDist < nearestDistance(closestCity)
        nearestDistance(closestCity) = minDist;
        nearestLocation(closestCity) = locationNum(i);
    end
end


%for loop to print all the values
fprintf('| City | # Closest | Nearest Location\n');
fprintf('===================================\n');
for i = 1:numOfCities
    fprintf('%s \t| %d \t| %d\n', city{i}, closestCities(i), nearestLocation(i));
end
