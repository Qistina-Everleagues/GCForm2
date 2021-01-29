import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { TeamsComponent } from './teams/teams.component';
import { GcarrierComponent } from './gcarrier/gcarrier.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavListComponent,
    TeamsComponent,
    GcarrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
