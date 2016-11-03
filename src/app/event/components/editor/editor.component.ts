import { Event } from './../../../team/models/event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  @Input() event: Event

  dt: any;
  time: any;

  constructor() { }

  ngOnInit() {
  }

}
