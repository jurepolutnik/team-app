import { Room, Message } from './../models/room';
import { Player } from './../models/player';
import { Observable } from 'rxjs/Observable';
import { Team } from './../models/team';
import { Event } from './../models/event';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx'

@Injectable()
export class TeamService {

  team$: FirebaseObjectObservable<Team>;
  event$: Observable<Event>;
  room$: Observable<Room>;
  members$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => this.initialize(params['id']))
    console.log(activatedRoute);
 }

 initialize (id) {
    this.team$ = this.af.database.object('/teams/'+id, {});
    this.event$ = this.team$.flatMap(team => this.af.database.object('/events/'+team.event)).map(fbEvent => Event.convertFromFb(fbEvent));
    this.room$ = this.team$.flatMap(team => this.af.database.object('/rooms/'+team.room)).map(fbRoom => Room.convertFromFb(fbRoom));

 }

  getTeam(): Observable<Team> {
    return this.team$;
  }

  getEvent(): Observable<Event> {
    return this.event$;
  }

  createEvent(event: Event) {
    var eventKey = this.af.database.list('/events/').push({date: event.date.getTime(), location:event.location}).key;
    this.team$.update({ event: eventKey})
    // this.af.database.list('/events/').push({date: new Date(), location:'celje'}).then(fbEvent => {
    //   debugger;
    //   console.log(fbEvent)
    //   this.team$.update({ event: fbEvent.key})
    // });
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
