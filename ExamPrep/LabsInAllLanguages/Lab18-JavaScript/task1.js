//Create a City class. It should take the name and the population as instance vars.
	//It should have an equals method that takes another city as a parameter
	//and returns true if this city's name and population match the other city's name and population
    class City{
        constructor(cityName, cityPopulation){
            this.cityName = cityName
            this.cityPopulation = cityPopulation
        }
    
        equals(city2){
    
            if(this.cityName === city2.cityName){
                return (this.cityPopulation === city2.cityPopulation);
            }
            
            return false;
            
        }
        cityName(){
            return this.cityName;
        }
    
    
    }
    
    class CityMap{
    
        //The programmer missed something in the constructor
        constructor(){
            this.adjacencyList = [];
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
                
                //Check to see if endCity is in list
                let endCityFound = -1;
                for(let i = 0; i < this.adjacencyList.length; i++){
                    if(this.adjacencyList[i][0].equals(endCity)){
                        endCityFound = i;
                        break;
                    }
                }
                //EndCity already registered in list
                if(endCityFound >= 0){
                    this.adjacencyList[endCityFound][1][this.adjacencyList[endCityFound][1].length] = startCity;
                    this.adjacencyList[endCityFound][2][this.adjacencyList[endCityFound][2].length] = dist;
                }
                //EndCity is not registered
                else{
                    this.adjacencyList[this.adjacencyList.length] = [endCity, [startCity], [dist]];
                }
            
            }
        }
    
        //TODO: Create a printMap() function that takes no parameters and prints the 
            //entire map. It should match the styling from the lab document.
    
    
        printMap() {
        
            for (let i = 0; i < this.adjacencyList.length; i++){
                let currStartCity = this.adjacencyList[i][0];
                console.log(currStartCity.cityName);
    
                for (let j = 0; j < this.adjacencyList[i][1].length; j++){
    
                    let currEndCity = this.adjacencyList[i][1][j];
                    let dist = this.adjacencyList[i][2][j];
    
                    console.log(`\t${currEndCity.cityName} (${dist}km)`);
                }
            }
        }
    }
    
    
    let Bathurst = new City("Bathurst", 90000);
    let Miramichi = new City("Miramichi", 750000);
    let Edmundston = new City("Edmundston", 85000);
    let Campbellton = new City("Campbellton", 100000);
    
    let map = new CityMap();
    map.addConnection(Bathurst, Miramichi, 75.9);
    map.addConnection(Bathurst, Edmundston, 248);
    map.addConnection(Bathurst, Campbellton, 108);
    map.addConnection(Edmundston, Campbellton, 200);
    
    map.printMap()
    
    