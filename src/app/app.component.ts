import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  title = 'mon-projet-angular';
  
  constructor() {
  }
  onAllumer() {
    console.log('On allume tout !');
}
}
