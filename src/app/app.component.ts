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
    picture: {
      [Personas.BORROWER]: './assets/christian.jpeg',
      [Personas.BPI]: './assets/anne.jpg',
    },
    companyPicture: {
      [Personas.BORROWER]: './assets/immoconfort.jpg',
      [Personas.BPI]: '',
    },
    name: {
      [Personas.BORROWER]: 'Christian',
      [Personas.BPI]: 'Anne',
    },
  };

  title = {
    [Personas.BORROWER]: 'Mon prêt',
    [Personas.BPI]: 'Tableau de bord',
  };

  navigateToBpi() {
    this.router.navigate(['home-bpi']);
  }

  navigateHome() {
    this.router.navigate(['']);
  }
}
