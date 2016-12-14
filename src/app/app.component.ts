import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html'
})
export class AppComponent {
  name: string;
  artists: any;

  constructor() {
    this.name =  'Ray';
    this.artists = [
      {
          name: 'Barot Bellingham',
          school: 'Penn State'
      },{
          name: 'Hillary Post',
          school: 'University of Illinois'
      }
    ];
  }
}
