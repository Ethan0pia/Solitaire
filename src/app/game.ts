import { Deck } from "./deck";
import { Card } from "./card";

export class Game{
    deck:Deck;
    selectedCard:Card;
    selectedCardColumn: number;
    tableaus:Card[][];
    foundations:Card[] = [];
    wastePile:Card[] = [];
    currentCard:string = "None";

    constructor(){
        this.deck=new Deck();
        this.selectedCard=null;
        this.tableaus=[[],[],[],[],[],[],[]];
        this.selectedCardColumn=8;
        this.deal(this.tableaus, this.deck);
    }
    
    deal(tableaus, deck){
        for(var row = 0; row<7;row++){
            for(var tab = row; tab<7;tab++){
                if(tab===row){
                    tableaus[tab][row]=deck.getDeck().pop();
                    tableaus[tab][row].faceDown = false;
                }else{
                    tableaus[tab][row]=deck.getDeck().pop();
                }
            }
        }
    }

    test(){
        console.log(this.tableaus);
        console.log(this.deck.getDeck());
    }

    won(){
        var counter=0;
        for( var card of this.foundations){
            if(card.getValue()===13){counter++}
        }
        return counter===4;
    }

    getCard(value:number,suit:string, column:number){
        return this.tableaus[column].find(c => c.getValue()===value && c.getSuit()===suit);
    }

    drawCard(){
        var tempCard = this.deck.getDeck().pop();
        tempCard.faceDown=false;
        this.wastePile.push(tempCard);
        this.setDefaultCard();
    }

    restack(){
        this.deck.deck= this.wastePile.reverse();
        this.wastePile = [];
        this.setDefaultCard();
    }

    clickDiscard(){
        this.selectedCard=this.wastePile[this.wastePile.length-1];
        this.selectedCardColumn = 8;
        this.setCurrentCard(this.selectedCard);
    }

    clickFoundation(){
        if(this.selectedCard!=null){
            if(this.selectedCard.getValue()===1){
                this.foundations.push(this.selectedCard);
                if(this.selectedCardColumn===8){
                    this.wastePile.pop();
                }else{
                    this.tableaus[this.selectedCardColumn].pop();
                    this.tableaus[this.selectedCardColumn][this.tableaus[this.selectedCardColumn].length-1].faceDown = false;
                }
            }else{
                for(var i=0;i<this.foundations.length;i++){
                    if(this.selectedCard.canMoveToFoundation(this.foundations[i])){
                        this.foundations[i] = this.selectedCard;
                        if(this.selectedCardColumn===8){
                            this.wastePile.pop();
                        }else{
                            this.tableaus[this.selectedCardColumn].pop();
                            this.tableaus[this.selectedCardColumn][this.tableaus[this.selectedCardColumn].length-1].faceDown = false;
                        }
                        break;
                    }
                }
            }
            this.setDefaultCard();
        }
    }

    setDefaultCard(){
        this.selectedCard = null;
        this.selectedCardColumn=8;
        this.setCurrentCard(this.selectedCard);
    }

    clickTableau(value:number,suit:string, column:number){
        var card = this.getCard(value, suit, column);
        if(card===this.selectedCard || card.getFaceDown()){
            this.setDefaultCard();
        }else if(this.selectedCard===null){
            this.selectedCard = card;
            this.selectedCardColumn=column;
            this.setCurrentCard(this.selectedCard);
        }else if(this.tableaus[column][this.tableaus[column].length-1]===card){
            if(!this.moveCard(card, column)){
                this.selectedCard = card;
                this.selectedCardColumn=column;
                this.setCurrentCard(this.selectedCard);
            }
        }else{
        }
        console.log(this.selectedCard);
    }

    moveKing(column:number){
        if(this.selectedCard.value===13){
            if(this.selectedCardColumn===8){
                this.tableaus[column].push(this.wastePile.pop());
            }else{
                for(var i=0;i<this.tableaus[this.selectedCardColumn].length;i++){
                    if(this.tableaus[this.selectedCardColumn][i]===this.selectedCard){
                        this.tableaus[column] = this.tableaus[column].concat(this.tableaus[this.selectedCardColumn].splice(i));
                        this.tableaus[this.selectedCardColumn][this.tableaus[this.selectedCardColumn].length-1].faceDown = false;
                    }
                }
                this.tableaus[this.selectedCardColumn][this.tableaus[this.selectedCardColumn].length-1].faceDown=false;
            }
        }
        this.setDefaultCard();
    }

    moveCard(card:Card, column:number){
        if(this.selectedCard.canMove(card)){
            console.log("can move");
            if(this.selectedCardColumn===8){
                console.log("from waste");
                var tempCard = this.wastePile.pop();
                tempCard.faceDown = false;
                this.tableaus[column].push(tempCard);

            }else{
                console.log("other tableau");
                for(var i=0;i<this.tableaus[this.selectedCardColumn].length;i++){
                    if(this.tableaus[this.selectedCardColumn][i]===this.selectedCard){
                        this.tableaus[column] = this.tableaus[column].concat(this.tableaus[this.selectedCardColumn].splice(i));
                        this.tableaus[this.selectedCardColumn][this.tableaus[this.selectedCardColumn].length-1].faceDown = false;
                        this.setDefaultCard();
                    }
                }
            }
            return true;
        }else{
            //this.setCurrentCard(this.selectedCard);
            //this.selectedCardColumn = column;
            return false;
            //this.setDefaultCard();
        }
    }
    
    setCurrentCard(selectedCard:Card){
        this.currentCard = "";
        if(selectedCard===null){
            this.currentCard = "None";
        }else{
            if(selectedCard.value>10 || selectedCard.value===1){
                switch(selectedCard.value){
                    case 1:
                        this.currentCard = "Ace";
                        break;
                    case 11:
                        this.currentCard = "Jack";
                        break;
                    case 12:
                        this.currentCard = "Queen";
                        break;
                    case 13:
                        this.currentCard = "King";
                        break;
                } 
            }else{
                this.currentCard+=""+selectedCard.value;
            }
            switch(selectedCard.suit){
                case "h":
                    this.currentCard+=" of Hearts";
                    return;
                case "s":
                    this.currentCard+=" of Spades";
                    return;
                case "c":
                    this.currentCard+=" of Clubs";
                    return;
                case "d":
                    this.currentCard+=" of Diamonds";
                    return;
            }
        }
    }

    newGame(){
        this.deck=new Deck();
        this.selectedCard=null;
        this.tableaus=[[],[],[],[],[],[],[]];
        this.selectedCardColumn=8;
        this.deal(this.tableaus, this.deck);
        this.foundations = [];
        this.wastePile = [];
    }
}
