import { Event } from './../../../team/models/event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
