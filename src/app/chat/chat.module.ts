import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MaterializeModule
  ],
  declarations: [ChatComponent],
  exports: [ChatComponent]
})
export class ChatModule { }
