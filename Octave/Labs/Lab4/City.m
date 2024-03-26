
classdef City 
	properties
		name = '';
		population = 0;
	end;

	methods 
		% Constructor
		function obj = City(name, population)
			obj.name = name;
			obj.population = population;
		end;

		%accessor methods
		function name = getName(obj)
			name = obj.name;
		end;

		function population = getPopulation(obj)
			population = obj.population;
		end;

		% mutator methods
		function obj = setName(obj, newName)
			obj.name = newName;
		end;

		function obj = setPopulation(obj, newPopulation)
			obj.population = newPopulation;
		end;

		function disp(obj)
			fprintf('City:\n\tName: %s\n\tPopulation: %d\n', obj.name, obj.population);
		end;
	end;
end;


