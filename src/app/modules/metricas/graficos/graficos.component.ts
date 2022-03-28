import { Component, OnInit } from '@angular/core';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartPlugins = [ DataLabelsPlugin];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  public chart:any = [
    {
      data: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
        { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
        {
          data: [180, 480, 770, 90, 1000, 270, 400],
          label: "Series C",
          yAxisID: "y-axis-1",
        },
      ],
      chartLabels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
      chartType: "line",
      chartLegend: true,
      chartStyleColor: [
        {
          backgroundColor: "rgba(80, 227, 194, 0.5)",
          borderColor: "rgba(80, 227, 194, 1)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderColor: "rgb(255, 255, 255)",
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgb(255, 255, 255)",
        },
        {
          backgroundColor: "rgba(33, 166, 238, 0.6)",
          borderColor: "rgba(33, 166, 238, 1)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderColor: "rgb(255, 255, 255)",
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgb(255, 255, 255)",
        },
        {
          backgroundColor: "rgb(128, 124, 204, 0.5)",
          borderColor: "rgb(128, 124, 204)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderColor: "rgb(255, 255, 255)",
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgb(255, 255, 255)",
        },
      ],
    },
    {
      data: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
        { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
      ],
      chartLabels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
      chartType: "bar",
      barChartLegend: true,
      chartStyleColor: [
        {
          backgroundColor: "rgba(80, 227, 194, 0.5)",
          borderColor: "rgba(80, 227, 194, 1)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderColor: "rgb(255, 255, 255)",
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgb(255, 255, 255)",
        },
        {
          backgroundColor: "rgba(33, 166, 238, 0.6)",
          borderColor: "rgba(33, 166, 238, 1)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderColor: "rgb(255, 255, 255)",
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgb(255, 255, 255)",
        },
        {
          backgroundColor: "rgb(128, 124, 204, 0.5)",
          borderColor: "rgb(128, 124, 204)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderColor: "rgb(255, 255, 255)",
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgb(255, 255, 255)",
        },
      ],
    },
  ]

}
