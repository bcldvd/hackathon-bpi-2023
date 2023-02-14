import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Personas, PersonaService } from 'src/app/shared/services/persona.service';

@Component({
  selector: 'app-home-bpi',
  templateUrl: './home-bpi.component.html',
  styleUrls: ['./home-bpi.component.scss'],
})
export class HomeBpiComponent {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: "entreprise" },
    { field: "secteur d'activité" },
    { field: "ville" },
    { field: "région" },
    { field: "date de l'emprunt" },
    { field: "durée" },
    { field: "date de fin" },
    { field: "taux de base" },
    { field: "discount" },
    { field: "taux bonifié" },
    { field: "condition (GWh/an)" },
    { field: "condition (tCO2/an)" },
    { field: "dernière date d'observation" },
    { field: "réalisation (GWh)" },
    { field: "réalisation (tCO2)" }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public countGreenloans = 0;
  public CO2 = 42;
  public reducedCO2 = 12;
  public duration = 5000;

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient, public personaService: PersonaService) {
    this.personaService.setBPI();
  }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>('assets/json/greenloans.json');
    this.rowData$.subscribe(res => this.countGreenloans = res.length);
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  ngOnDestroy(): void {
    this.personaService.setPersona(Personas.BORROWER);
  }
}
