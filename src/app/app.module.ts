import { FirebaseModule } from './../firebase/index';
import { PlayersModule } from './players/players.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule} from '@ngrx/store';
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
    FormsModule,
    HttpModule,
    PlayersModule,
    FirebaseModule,
    MaterializeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
