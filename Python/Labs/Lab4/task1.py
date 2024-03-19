import abc
from abc import ABC, abstractmethod


class TradingCard(ABC):

    def __init__(self, ID, Rarity, YearRelease):
        self.ID = ID
        self.Rarity = Rarity
        self.YearRelease = YearRelease


    def getID(self):
        return self.ID


    def getRarity(self):
        return self.Rarity

    def getYearRelease(self):
        return self.YearRelease
    
    def setRarity(self, input):
        if(input >= 0 and input <= 10):
            self.Rarity = input
        else:
            print("That input is out of range")
    
    def toString(self):
        return("# " + str(self.ID) + " ("+ str(self.YearRelease) + "): Rarity: " + str(self.Rarity))

    @abstractmethod
    def cost(self):
        pass

class HockeyCard(TradingCard):

    def __init__(self, ID, Rarity, YearRelease, playerName, jerseyNum, totalWins):
        super().__init__(ID, Rarity, YearRelease)
        self.playerName = playerName
        self.jerseyNum = jerseyNum
        self.totalWins = totalWins

    def getPlayerName(self):
        return self.playerName
    
    def getJerseyNum(self):
        return self.jerseyNum

    def getTotalWins(self):
        return self.totalWins
    
    def cost(self):
        return round((self.totalWins * ((2023 - super().getYearRelease())/10) * (0.15 + super().getRarity()/5)), 2)

    def toString(self):
        return (super().toString() + " Cost: $" + str(self.cost()) + "\n\t " + self.getPlayerName() + " (#"+ str(self.getJerseyNum()) + ") - " + str(self.getTotalWins()) + " Games Won")

class PlayingCard(TradingCard):

    def __init__(self, ID, Rarity, YearRelease, holographicStatus, condition):
        super().__init__(ID, Rarity, YearRelease)
        self.holographicStatus = holographicStatus
        self.condition = condition
    
    def getHolographicStatus(self):
        return self.holographicStatus
    
    def getCondition(self):
        return self.condition
    
    def setCondition(self, input):
        if(input == "Mint" or input == "Good" or input == "Poor"):
            self.condition = input
        else:
            print("Not a valid condition")
    
    def cost(self):
        toReturn = (super().getRarity() / 2)

        if(self.getCondition() == "Mint"):
             toReturn = toReturn * 5.15
        elif(self.getCondition() == "Good"):
             toReturn = toReturn * 2.15
        elif(self.getCondition() == "Poor"):
            toReturn = toReturn * 0.5

        if(self.getHolographicStatus):
            toReturn * 5
        
        return round(toReturn, 2)
    
    def toString(self):
        return (super().toString() + " Cost: $" + str(self.cost()) + "\n\t Holographic: " + str(self.getHolographicStatus()) + "\tCondition: " + self.getCondition())


def driver():
    objectList = []
    print("\n hockeyCards tests\n")
    hockeyTest = HockeyCard(1001, 3, 2020, "Will", 34, 1200)
    print(hockeyTest.cost())
    print(hockeyTest.toString())
    print(hockeyTest.getJerseyNum())


    print("\n playingCard tests\n")
    playingTest = PlayingCard(1002, 6, 2015, True, "Mint")
    print(playingTest.cost())
    print(playingTest.toString())
    print(playingTest.getHolographicStatus())
    playingTest.setCondition("Good")
    print(playingTest.getCondition())


    # add to the list
    objectList.append(hockeyTest)
    objectList.append(playingTest)


    print("\nStart for loop of objects\n")
    for obj in objectList:
        print(obj.toString())
      


# driver()

def highest():
    cards = []
    card1 = HockeyCard(1001, 3, 2000, "Will", 3, 130)
    card2 = PlayingCard(1002, 6, 2005, True, "Mint")
    card3 = HockeyCard(1003, 7, 2020, "Ross", 4, 0)
    card4 = PlayingCard(1004, 2, 2012, False, "Good")
    card5 = HockeyCard(1005, 1, 2009, "John", 67, 13)
    card6 = PlayingCard(1006, 0, 2007, False, "Poor")
    card7 = HockeyCard(1007, 10, 2021, "Smith", 99, 2220)
    card8 = PlayingCard(1008, 5, 2013, True, "Good")

    cards.append(card1)
    cards.append(card2)
    cards.append(card3)
    cards.append(card4)
    cards.append(card5)
    cards.append(card6)
    cards.append(card7)
    cards.append(card8)

    topCards = []

    pos1 = 0
    pos2 = 0
    pos3 = 0

    for card in cards:
        
        if(card.cost() > pos1):

            if(card.cost() > pos2):

                if(card.cost() > pos3):
                    pos1 = pos2
                    pos2 = pos3
                    pos3 = card.getId()

            pos1 = pos2
            pos2 = card.getID()

        pos1 = card.getID()

    for obj in objectList:
        print(obj.toString())
    


        print(obj.toString())
highest()
    







