import { TeamService } from './services/team.service';
import { inject } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { ChatModule } from './../chat/chat.module';
import { EventModule } from './../event/event.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { HeaderComponent } from './header/header.component';
import { MaterializeModule } from 'angular2-materialize';

const routes: Routes = [
  { path: 't/:id', component: TeamComponent }
]

@NgModule({
  imports: [
    CommonModule,
    EventModule,
    ChatModule,
    MaterializeModule,
    RouterModule.forChild(routes)
  ],
  providers: [TeamService],
  declarations: [TeamComponent, HeaderComponent],
  exports: [TeamComponent]
})
export class TeamModule { }
