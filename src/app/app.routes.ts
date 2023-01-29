import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import {NetworksComponent} from "./views/networks/networks.component";
import {TerminalComponent} from "./views/terminal/terminal.component";
import {ContractsComponent} from "./views/contracts/contracts.component";
import {FirewallComponent} from "./views/firewall/firewall.component";

const routes: Routes = [
  {path: 'contracts', component: ContractsComponent, data: {title: 'Contracts'}},
  {path: 'firewall', component: FirewallComponent, data: {title: 'Firewall'}},
  {path: 'networks', component: NetworksComponent, data: {title: 'Networks'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'cli', component: TerminalComponent, data: {title: 'Terminal'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
