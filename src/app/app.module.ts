import { HomeModule } from './home/home.module';
import { TeamModule } from './team/team.module';
import { ChatModule } from './chat/chat.module';
import { EventModule } from './event/event.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
    authDomain: 'fuzbal-d3001.firebaseapp.com',
    apiKey: 'AIzaSyDwvYrDYOD0DFRa_7pmWbkMQohglaAyIkw',
    databaseURL: 'https://fuzbal-d3001.firebaseio.com',
    storageBucket: 'fuzbal-d3001.appspot.com',
};

@NgModule({
  providers: [
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    TeamModule,
    EventModule,
    ChatModule,
    HomeModule,
    RouterModule.forRoot([], {useHash: false})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
