import { TeamService } from './../../../team/services/team.service';
import { Event } from './../../../team/models/event';
import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment'

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'event-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  @Input() event: Event;

  private timeFormat = "hh:mmA";
  private dateFormat = "DD-MM-YYYY";

  constructor(private teamService: TeamService) { }

  ngOnInit() { }

  get date(): string { return moment(this.event.date).format(this.dateFormat); }
  set date(_date: string) { this.event.date = moment(_date + 'T' + this.time, this.dateFormat+'T'+this.timeFormat).toDate(); }
  get time(): string { return moment(this.event.date).format(this.timeFormat); }
  set time(_time: string) { this.event.date = moment(this.date + 'T' + _time, this.dateFormat+'T'+this.timeFormat).toDate(); }

  ngOnChanges() {
    if (this.event) {
      $('#editor-timepicker').change(e => this.time = e.target.value);
      window.setTimeout(_ => Materialize.updateTextFields())
    }
  }

  save() {
    this.teamService.createEvent(this.event);
    $('#editor-dialog').closeModal();
  }
}
