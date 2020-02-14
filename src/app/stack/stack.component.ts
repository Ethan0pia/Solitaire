import { Component, OnInit, Input } from '@angular/core';
import { Game } from "../game";

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  @Input() num:number;
  @Input() game:Game;

  constructor() {}

  clickCard(value , suit, num){
    this.game.clickTableau(value , suit, num);
  }

  ngOnInit() {
  }

}
