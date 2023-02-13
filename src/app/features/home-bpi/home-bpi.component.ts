import { Component, OnDestroy } from '@angular/core';
import {
  Personas,
  PersonaService,
} from 'src/app/shared/services/persona.service';

@Component({
  selector: 'app-home-bpi',
  templateUrl: './home-bpi.component.html',
  styleUrls: ['./home-bpi.component.scss'],
})
export class HomeBpiComponent implements OnDestroy {
  constructor(public personaService: PersonaService) {
    this.personaService.setBPI();
  }

  ngOnDestroy(): void {
    this.personaService.setPersona(Personas.BORROWER);
  }
}
