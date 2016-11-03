import { Room } from './models/room';
import { AngularFire } from 'angularfire2';
import { Event } from './models/event';
import { Team } from './models/team';
import { Observable } from 'rxjs/Observable';
import { TeamService } from './services/team.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {

  team: Team;
  room: Room;
  event: Event;

  constructor(private zone:NgZone, private teamService: TeamService) { }

  ngOnInit() {
    // WORKAROUND [bug] Firebase not working in zone
    this.teamService.getTeam().subscribe(team => {
      this.zone.run(()=> this.team = team);
    });

    this.teamService.getRoom().subscribe(room => {
      this.zone.run(()=> this.room = room);
    });

    this.teamService.getEvent().subscribe(event => {
      this.zone.run(()=> this.event = event);
    });
  }

}
