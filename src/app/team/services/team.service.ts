import { Room, Message } from './../models/room';
import { Player } from './../models/player';
import { Observable } from 'rxjs/Observable';
import { Team } from './../models/team';
import { Event } from './../models/event';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'

@Injectable()
export class TeamService {

  team$: Observable<Team>;
  event$: Observable<Event>;
  room$: Observable<Room>;
  members$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.team$ = af.database.object('/teams/fuzbal', {});
    this.event$ = this.team$.flatMap(team => af.database.object('/events/'+team.event)).map(fbEvent => Event.convertFromFb(fbEvent));
    this.room$ = this.team$.flatMap(team => af.database.object('/rooms/'+team.room)).map(fbRoom => Room.convertFromFb(fbRoom));
 }

  getTeam(): Observable<Team> {
    return this.team$;
  }

  getEvent(): Observable<Event> {
    return this.event$;
  }

  getRoom(): Observable<Room> {
    return this.room$;
  }

  addMember(event: Event, name: string) {
    this.af.database.list('/events/'+event.$key+'/members').push(new Player(name));
  }

  removeMember(event: Event, member: Player) {
    this.af.database.list('/events/'+event.$key+'/members').remove(member.$key);
  }

  addMessage(room: Room, message: Message) {
    this.af.database.list('/rooms/'+room.$key+'/messages').push(message);
  }

  removeMessage(room: Room, message: Message) {
    this.af.database.list('/rooms/'+room.$key+'/messages').remove(message.$key);
  }
}
