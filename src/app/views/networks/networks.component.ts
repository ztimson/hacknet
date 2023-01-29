import { Component } from "@angular/core";

export type Network = {
  strength: number,
  name: string,
}

@Component({
  selector: 'hn-networks',
  templateUrl: './networks.component.html'
})
export class NetworksComponent {
  connected: Network = {strength: 3, name: 'OutraNet'}
  discovered: Network[] = [
    {strength: 4, name: 'SkyNet'},
    {strength: 2, name: 'FBI Survelence Van'},
    {strength: 3, name: 'Bat Cave'},
  ]
  tunnled: Network[] = [
    {strength: 3, name: 'Bat Cave'},
  ]
}
