import { calcPossibleSecurityContexts } from "@angular/compiler/src/template_parser/binding_parser";

export class Card{
    value : number;
    suit : string;
    color : string;
    imgSrc : string;
    faceDown: boolean;

    constructor(value: number, suit: string){
        this.value = value;
        this.suit = suit;
        this.faceDown = true;
        if(suit === "c" || suit === "s"){
            this.color = "b"
        }else{
            this.color = "r";
        }
        this.imgSrc = "../../assets/Cards/"+ suit+"/"+value+".png";
    }

    canMove(card2){
        return card2.getValue()-1===this.value && card2.getColor()!==this.color;
    }
    canMoveToFoundation(card2){
        return card2.getValue()+1===this.value && card2.getSuit()===this.suit;
    }
    
    //getters
    getValue (){return this.value;}
    getSource (){return this.imgSrc;}
    getColor (){return this.color;}
    getSuit (){return this.suit;}
    getFaceDown (){return this.faceDown;}
}