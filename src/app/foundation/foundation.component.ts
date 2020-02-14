import { Component, OnInit, Input } from '@angular/core';
import { Game } from "../game";

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {
  @Input() game:Game;
  foundationIndex:number[]=[0,1,2,3];
  constructor() {
  }

  ngOnInit() {
  }

}
