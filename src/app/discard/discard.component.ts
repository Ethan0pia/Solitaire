import { Component, OnInit, Input } from '@angular/core';
import { Game } from "../game";

@Component({
  selector: 'app-discard',
  templateUrl: './discard.component.html',
  styleUrls: ['./discard.component.css']
})
export class DiscardComponent implements OnInit {
  @Input() game:Game;

  constructor() { }

  ngOnInit() {
  }

}
