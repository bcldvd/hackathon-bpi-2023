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

  public priceTCO2 = 0;
  public countGreenloans = 0;
  public producedCO2 = 0;
  public reducedCO2 = 0;
  public duration = 2000;

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
          data: [
            34.424,
            29.574,
            26.644,
            24.632,
            22.62,
            20.608,
            18.596,
            15.584,
            14.572,
            13.56,
            12.548,
            12.384,
            11.536,
            10.536,
          ],
          color: "#FFCD00"
        },


        {
          name: "Objectif 2050",
          type: "line",
          data: [
            34,
            29,
            27,
            24,
            22,
            20,
            18,
            16,
            15,
            14,
            13,
            12,
            11,
            10
          ],
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
        // curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      labels: [
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
        "2031",
        "2032",
        "2033",
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: "category"
      },
      yaxis: {
        title: {
          text: "GWh"
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " GWh";
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
      this.countGreenloans = res.length;
      this.reducedCO2 = this.computeReducedCO2(res);
      this.producedCO2 = this.computeReducedKWH(res);
      this.priceTCO2 = this.computePriceTCO2(res, this.reducedCO2);
    });
  }

  computePriceTCO2(data: any, reducedCO2: any) {
    const sumInvest = Math.round(data.map((item: any) => Number.parseFloat(item["montant du prêt"])).reduce((pSum: any, a: any) => pSum + a, 0.0));
    return Math.round(sumInvest / (reducedCO2 * 27));
  }

  computeReducedCO2(data: any) {
    return Math.round(data.map((item: any) => Number.parseFloat(item["réalisation (tCO2)"])).reduce((pSum: any, a: any) => pSum + a, 0.0));
  }

  // SUM(conso energie reference(GWh))-SUM(consommation (GWh))
  computeReducedKWH(data: any) {
    const sumEnergieRef = data.map((item: any) => Number.parseFloat(item["conso energie reference(GWh)"])).reduce((pSum: any, a: any) => pSum + a, 0.0);
    const sumconsommation = data.map((item: any) => Number.parseFloat(item["consommation (GWh/an)"])).reduce((pSum: any, a: any) => pSum + a, 0.0);
    return Math.round((sumEnergieRef - sumconsommation) * 100) / 100
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
