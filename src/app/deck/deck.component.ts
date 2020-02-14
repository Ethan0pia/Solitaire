import { Component, OnInit } from '@angular/core';
import {Game} from '../game';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  game: Game = new Game();
  tableauLoops = [0,1,2,3,4,5,6];
  
  constructor() { }

  ngOnInit() {
  }

}
