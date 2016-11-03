import 'firebase';
import { HomeModule } from './home/home.module';
import { TeamModule } from './team/team.module';
import { ChatModule } from './chat/chat.module';
import { EventModule } from './event/event.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FirebaseModule } from './../firebase/index';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

@NgModule({
  providers: [
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    TeamModule,
    EventModule,
    ChatModule,
    HomeModule,
    MaterializeModule,
    RouterModule.forRoot([], {useHash: false})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
