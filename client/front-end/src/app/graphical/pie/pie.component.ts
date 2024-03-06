import { Component, OnInit,ViewChild,Input,SimpleChanges } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title:ApexTitleSubtitle
};

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @Input() public widgetData;
  @Input() public values;
  @Input() public nodeId;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public loaded: boolean;

  constructor() {   this.loaded = false; }

  ngOnInit(): void {
    this.chartOptions = {
      series: [],
      chart: {
        width: "80%",
        type: "pie"
      },   title: {
        text:this.widgetData.chartTitle,
        align: "left",
        offsetX: 30,
        offsetY: -1.5
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  public ngAfterViewInit(): void {
    // this.chart = new ChartComponent();
    this.loaded = true;
  }

  public ngOnChanges(changes: SimpleChanges) {
    let series=[];
    let labels=[];
    this.values.forEach(item => {
      this.widgetData.seriesChart.forEach(el=>{
        if(item[el.seriesKey]){
          labels.push(el.seriesLabel);
          series.push( Math.round(item[el.seriesKey].value) );
        }
      })
    });

    this.chartOptions={...this.chartOptions,series:series,labels:labels}
  }

}
