import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill, ApexMarkers, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent
} from "ng-apexcharts";
import { Observable } from 'rxjs';
import { Personas, PersonaService } from 'src/app/shared/services/persona.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-home-bpi',
  templateUrl: './home-bpi.component.html',
  styleUrls: ['./home-bpi.component.scss'],
})
export class HomeBpiComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: "emprunteur" },
    { field: "secteur d'activité" },
    { field: "montant du prêt" },
    { field: "consommation (GWh/an)" },
    { field: "réalisation (tCO2)" },
    { field: "taux de base" },
    { field: "discount" }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public countGreenloans = 0;
  public CO2 = 42;
  public ratioCO2 = 0.2;
  public reducedCO2 = 0;
  public duration = 5000;

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient, public personaService: PersonaService) {
    this.personaService.setBPI();
    this.chartOptions = {
      series: [
        {
          name: "Consommation",
          type: "column",
          data: [100, 80, 40, 20],
          color: "#FFCD00"
        },
        {
          name: "Objectif 2050",
          type: "line",
          data: [80, 60, 40, 20],
          color: "#00EAAA"
        }
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 6,
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      labels: [
        "2010",
        "2030",
        "2040",
        "2050",
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: "category"
      },
      yaxis: {
        title: {
          text: "MWh"
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " MWh";
            }
            return y;
          }
        }
      }
    }
  }

  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>('assets/json/greenloans.json');
    this.rowData$.subscribe(res => {
      this.countGreenloans = res.length
      // this.reducedCO2 = res.map((item) => Number.parseFloat(item["réalisation (tCO2)"])).reduce((partialSum, a) => partialSum + a, 0.0);
      this.reducedCO2 = 291;
    });
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
