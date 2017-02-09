import { TeamService } from './../team/services/team.service';
import { Room, Message } from './../team/models/room';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @Input() room: Room;
  @ViewChild('messageList') messageList: ElementRef;


  private user: string;
  private text: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() { 
    this.user = localStorage.getItem('user');
  }

  submit() {
    let message = new Message(this.user, this.text);
    message.user = message.user ? message.user : '(anonymous)';
    this.teamService.addMessage(this.room, message)
    this.clear();
  }

  clear() {
    this.text = '';
  }

  getInitials(user: string) {
    if (user === '(anonymous)') return 'A';
    console.log(user);

    let s = user.trim().split(' ');

    if (s.length === 1) {
      return s[0][0].toUpperCase();
    } else {
      return (s[0][0] + s[1][0]).toUpperCase();
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.messageList.nativeElement.scrollTop = this.messageList.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
