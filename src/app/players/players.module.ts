import { PlayerService } from './services/player.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  declarations: [
    PlayersComponent, 
    ListComponent, 
    ItemComponent, 
    FormComponent
  ],
  providers: [
    PlayerService
  ],
  exports: [
    PlayersComponent
  ]
})
export class PlayersModule { }
