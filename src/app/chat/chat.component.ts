import { TeamService } from './../team/services/team.service';
import { Room, Message } from './../team/models/room';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  @Input() room: Room

  private user: string;
  private text: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() { }

  submit() {
    let message = new Message(this.user, this.text);
    message.user = message.user ? message.user : '(anonymous)';
    this.teamService.addMessage(this.room, message)
    this.clear();
  }

  clear () {
    this.text = '';
  }
}
