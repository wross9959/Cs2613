
classdef Country
	properties
		countryName = '';
		countryPopulation = 0;
		cities;
		cityCount = 0;

	end;

	methods
		% Constructor
		function obj = Country(countryName)
            obj.countryName = countryName;
            obj.countryPopulation = 0;
            
        end;


		%accessor methods
		function countryPopulation = getCountryPopulation(obj)
			countryPopulation = obj.countryPopulation;
		end;

		function countryName = getCountryName(obj)
			countryName = obj.countryName;
		end;

		% mutator methods
		function obj = addCity(obj, city)
            obj.cityCount = obj.cityCount + 1;
			obj.cities(obj.cityCount) = city;
			obj.countryPopulation = obj.countryPopulation + city.getPopulation();
		end;

		function disp(obj)
			disp('Country:');
			for i = 1:length(obj.cities)
				disp(obj.cities(i).disp());
			end;
		end;
	end;
end;
