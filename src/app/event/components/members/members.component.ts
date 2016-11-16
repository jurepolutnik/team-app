import { Player } from './../../../team/models/player';
import { TeamService } from './../../../team/services/team.service';
import { Event } from './../../../team/models/event';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment'

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
    this.memberName = localStorage.getItem('user');
  }

  toDate () {
    let now = new Date();
    let to = this.event.date;
    let diff = moment(to).diff(moment(now))
    let d = moment.duration(diff);
    if (d.days() === 1) return `${d.days()} day ${d.hours()} hours ${d.minutes()} minutes`
    if (d.days() > 1) return `${d.days()} days ${d.hours()} hours ${d.minutes()} minuets`
    if (d.hours() > 0) return `${d.hours()} hours ${d.minutes()} minutes`
    return `${d.hours()} hours ${d.minutes()} minutes`
  }

  submit(): void {
    if (!this.memberName) return;
    localStorage.setItem('user', this.memberName)
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
