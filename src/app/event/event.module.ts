import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MomentModule } from 'angular2-moment';
import { EventComponent } from './event.component';
import { MembersComponent } from './components/members/members.component';
import { DetailsComponent } from './components/details/details.component';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MomentModule,
    MaterializeModule
  ],
  providers: [
  ],
  declarations: [EventComponent, MembersComponent, DetailsComponent, EditorComponent],
  exports: [EventComponent, EditorComponent]
})
export class EventModule { }
