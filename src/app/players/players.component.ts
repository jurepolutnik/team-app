import { Observable } from 'rxjs/Observable';
import { PlayerService } from './services/player.service';
import { Player, IPlayer } from './models/player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.less']
})
export class PlayersComponent implements OnInit {

  private playerName: string;
  private players: Observable<IPlayer[]>;

  constructor(private playerService:PlayerService) { 
    this.players = playerService.getPlayers();
  }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.playerName);
    this.playerService.addPlayer(this.playerName);
    this.clear();
  }

  clear(): void {
    this.playerName = '';
  }
}
