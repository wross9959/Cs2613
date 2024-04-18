
import abc
from abc import ABC, abstractmethod

class UNBBuilding(ABC):
    def __init__(self, name, year, number_of_rooms):
        self.name = name
        self.year = year
        self.number_of_rooms = number_of_rooms


    def getName(self):
        return self.name
    
    def getYear(self):
        return self.year
    
    def getNumOfRooms(self):
        return self.number_of_rooms
    
    def setName(self, input):
        self.name = input
    
    def setYear(self, input):
        self.year = input

    def setNumOfRooms(self, input):
        self.number_of_rooms = input

    def equals(self, building2):
        return(self.getName() == building2.getName())

class UnbMap(UNBBuilding):

    def __init__(self):
        
        self.adjacencyList = []
        
    def addConnection(self, startBuilding, endBuilding, dist):

        if(len(self.adjacencyList) == 0):
            self.adjacencyList[0] = [startBuilding, [endBuilding], [dist]]
            self.adjacencyList[1] = [endBuilding, [startBuilding], [dist]]
		
        else:
	
            startCityFound = -1
            for i in range(len(self.adjacencyList)):
                if(self.adjacencyList[i][0].super().equals(startBuilding)):
                    startCityFound = i
                    
				
		
            if(startCityFound >= 0):
                self.adjacencyList[startCityFound][1][len(self.adjacencyList[startCityFound][1])] = endBuilding
                self.adjacencyList[startCityFound][2][len(self.adjacencyList[startCityFound][2])] = dist

            else:
                self.adjacencyList[len(self.adjacencyList)] = [startBuilding, [endBuilding], [dist]]
		
            endBuildingFound = -1
            for i in range(len(self.adjacencyList)):
                if(self.adjacencyList[i][0].super().equals(endBuilding)):
                    endBuildingFound = i
                    break
                

       
            if(endBuildingFound >= 0):
                self.adjacencyList[endBuildingFound][1][len(self.adjacencyList[endBuildingFound][1])] = startBuilding
                self.adjacencyList[endBuildingFound][2][len(self.adjacencyList[endBuildingFound][2])] = dist

      
            else:
                self.adjacencyList[len(self.adjacencyList)] = [endBuilding, [startBuilding], [dist]]
    def printMap(self):
	
        for i in range(len(self.adjacencyList)):
            currStartBuilding = self.adjacencyList[i][0]
            print(currStartBuilding.super().getName())

            for j in range(len(self.adjacencyList[i][1])):

                currEndBuilding = self.adjacencyList[i][1][j]
                dist = self.adjacencyList[i][2][j]

                print( ' -> ' + currEndBuilding.super().cityName() + ': ' + dist + ' minutes')

	

Toole =  UNBBuilding("Toole", 1976, 60)
HeadHall =  UNBBuilding("Head Hall", 1932, 89)
InformationCenter = UNBBuilding("Information Technology Center", 1980, 55)

map = UnbMap()
map.addConnection(Toole, InformationCenter, 2)


map.printMap()