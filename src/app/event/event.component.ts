import { Event } from './../team/models/event';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.less']
})
export class EventComponent implements OnInit {
  @Input() event: Event;


  constructor() { 
  }

  ngOnChanges() {
    // console.log(this.eventId)
  }

  ngOnInit() {
  }
}