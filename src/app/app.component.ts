import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kiko';

  isBPI = false;

  user = {
    picture: 'https://pbs.twimg.com/profile_images/1550535324501164032/0lTW_4tj_400x400.jpg'
  }
}
