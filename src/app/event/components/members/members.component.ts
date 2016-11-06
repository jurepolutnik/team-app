import { Player } from './../../../team/models/player';
import { TeamService } from './../../../team/services/team.service';
import { Event } from './../../../team/models/event';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'event-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less']
})
export class MembersComponent implements OnInit {

  @Input() event:Event;
  private memberName: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {

  }

  submit(): void {
    console.log(this.memberName);
    this.teamService.addMember(this.event, this.memberName);
    this.clear();
  }

  remove(member:Player): void {
    this.teamService.removeMember(this.event, member);
  }

  clear(): void {
    this.memberName = '';
    $('event-members .btn').focus();
  }

}
