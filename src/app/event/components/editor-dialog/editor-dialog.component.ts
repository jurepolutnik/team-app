import { Event } from './../../../team/models/event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-editor-dialog',
  templateUrl: './editor-dialog.component.html',
  styleUrls: ['./editor-dialog.component.css']
})
export class EditorDialogComponent implements OnInit {
  @Input() event: Event;

  editableEvent: Event;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.event) {
      this.editableEvent = new Event();
      this.editableEvent.date = this.event.date;
      this.editableEvent.location = this.event.location;
    }
  }
}
