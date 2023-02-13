import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personas, PersonaService } from './shared/services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Personas = Personas;

  constructor(public personaService: PersonaService, private router: Router) {}

  user = {
    picture:
      'https://pbs.twimg.com/profile_images/1550535324501164032/0lTW_4tj_400x400.jpg',
  };

  navigateToBpi() {
    this.router.navigate(['home-bpi']);
  }
}
