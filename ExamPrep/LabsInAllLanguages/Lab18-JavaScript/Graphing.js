//TODO: Create a City class. It should take the name and the population as instance vars.
	//It should have an equals method that takes another city as a parameter
	//and returns true if this city's name and population match the other city's name and population


class CityMap{
	//TODO: The programmer missed something in the constructor
	constructor(){
		adjacencyList = [];
	}

	addConnection(startCity, endCity, dist){
		//Adding first connection
		if(this.adjacencyList.length == 0){
			this.adjacencyList[0] = [startCity, [endCity], [dist]];
			this.adjacencyList[1] = [endCity, [startCity], [dist]];
		}
		else{
			//Check to see if startCity is in list
			let startCityFound = -1;
			for(let i = 0; i < this.adjacencyList.length; i++){
				if(this.adjacencyList[i][0].equals(startCity)){
					startCityFound = i;
					break;
				}
			}
			//startCity already registered in list
			if(startCityFound >= 0){
				this.adjacencyList[startCityFound][1][this.adjacencyList[startCityFound][1].length] = endCity;
				this.adjacencyList[startCityFound][2][this.adjacencyList[startCityFound][2].length] = dist;
			}
			//startCity is not registered
			else{
				this.adjacencyList[this.adjacencyList.length] = [startCity, [endCity], [dist]];
			}


			//TODO: Check to see if endCity is already in the adjacency list
				//If it is, add a connection to the startCity
				//If it is not, add it to the adjacency list then add its connection to startCity (could be one step)
				//Review the steps above to see how it is done with startCity instead of endCity
		}
	}

	//TODO: Create a printMap() function that takes no parameters and prints the 
		//entire map. It should match the styling from the lab document.
	
}

//Main code goes here...

//TODO: Create the four cities listed on the lab document


//TODO: Create a map and add connections between Bathurst-Miramichi, Bathurst-Edmundston
	//Bathurst-Campbellton, and Edmundston-Campbellton


//TODO: Print the map using your the function you created



