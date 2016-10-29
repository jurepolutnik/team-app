import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Player, IPlayer } from './../models/player';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  players$: FirebaseListObservable<IPlayer[]>;

  constructor(af: AngularFire) {
    this.players$ = af.database.list('/players');
  }

  addPlayer(playerName: string): void {
    this.players$.push(new Player(playerName));
  }

  removePlayer(player: IPlayer): firebase.Promise<any> {
    return this.players$.remove(player.$key);
  }

  getPlayers(): Observable<any[]> {
    return this.players$;
  }
}
