import { Card } from "./card";

export class Deck{

    deck : Card[];

    constructor(){
        this.deck = this.newDeck();
        this.deck = this.shuffle(this.deck);
    }

    newDeck(): Card[]{
        var newDeck = [];
        var suits = ['d','s','c','h'];
        for(var suit in suits){
            for(var i=1;i<=13;i++){
                newDeck.push(new Card(i,suits[suit]));
            }
        }
        return newDeck;
    }

    shuffle(array): Card[] {
        var shuffledArray = array.slice(0);
        var currentIndex = shuffledArray.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = shuffledArray[currentIndex];
          shuffledArray[currentIndex] = shuffledArray[randomIndex];
          shuffledArray[randomIndex] = temporaryValue;
        }
        return shuffledArray;
      }

      newGame(): void{
          this.deck = this.shuffle(this.deck);
      }

      getDeck(): Card[]{
          return this.deck;
      }

      testDeck(): void{
          var testDeck = this.newDeck();
          console.log(testDeck);
          testDeck = this.shuffle(testDeck);
          console.log(testDeck);
      }

}