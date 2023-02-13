import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Personas {
  BORROWER = 'BORROWER',
  BPI = 'BPI'
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private current = new BehaviorSubject(Personas.BORROWER);
  
  current$ = this.current.asObservable();

  setPersona(value: Personas) {
    this.current.next(value);
  }

  setBPI() {
    this.current.next(Personas.BPI);
  }
}
