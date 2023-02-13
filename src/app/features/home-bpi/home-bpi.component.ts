import { Component } from '@angular/core';
import { PersonaService } from 'src/app/shared/services/persona.service';

@Component({
  selector: 'app-home-bpi',
  templateUrl: './home-bpi.component.html',
  styleUrls: ['./home-bpi.component.scss']
})
export class HomeBpiComponent {

  constructor(public personaService: PersonaService) {
    this.personaService.setBPI()
  }

}
