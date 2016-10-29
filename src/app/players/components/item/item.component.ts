import { Player } from './../../models/player';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'players-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
