import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import {MaterialModule} from './material.module';

import { AppComponent } from './containers/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from "./views/login/login.component";
import {NetworksComponent} from "./views/networks/networks.component";
import {TerminalComponent} from "./views/terminal/terminal.component";
import { ContractsComponent } from './views/contracts/contracts.component';
import {FirewallComponent} from './views/firewall/firewall.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractsComponent,
    FirewallComponent,
    LoginComponent,
    NetworksComponent,
    TerminalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
