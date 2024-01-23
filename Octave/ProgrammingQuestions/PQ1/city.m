
cities = csvread('Cities.csv',1,1);
locations = csvread('Locations.csv', 1, 0);

num_cities = size(cities, 1);
num_locations = size(locations 1);
closest_count = zeros(num_cities, 1);
nearest_location = inf(num_cities, 1);
nearest_distance = inf(num_cities, 1);

for i = 1:num_locations
    location = locations(i, 2:3);
    min_distance = inf;
    closest_city = 0;
    for j = 1:num_cities
        city = cities(j, 2:3);
        distance = norm(location - city);
        if distance < min_distance
            min_distance = distance;
            closest_city = j;
        end
    end
    closest_count(closest_city) += 1;
    if min_distance < nearest_distance(closest_city)
        nearest_distance(closest_city) = min_distance;
        nearest_location(closest_city) = i;
    end
end

% Display summary table
fprintf('City | # Closest | Nearest Location\n');
fprintf('===================================\n');
for i = 1:num_cities
    fprintf('%s | %d | %d\n', char(64+i), closest_count(i), nearest_location(i));
end
