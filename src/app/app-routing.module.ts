import { NgModule } from '@angular/core';
import { GestureConfig } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GcarrierComponent } from './gcarrier/gcarrier.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'gcarrier', component: GcarrierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
