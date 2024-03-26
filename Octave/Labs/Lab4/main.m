

SaintJohn = City('Saint John', 120000);
disp(SaintJohn);


% SaintJohn = SaintJohn.setName('St. John');
% SaintJohn = SaintJohn.setPopulation(10000);

canada = Country("Canada");
canada = canada.addCity(SaintJohn);
canada = canada.addCity(City('Fredericton', 75000));
disp(canada);


disp(SaintJohn);
