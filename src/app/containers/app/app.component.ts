import { Component } from '@angular/core';
import {navigation} from '../../models/navigation';

@Component({
  selector: 'hn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigation = navigation;
}
