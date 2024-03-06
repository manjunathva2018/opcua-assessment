import { Component, OnInit,ViewChild, Input, SimpleChanges, } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  title:ApexTitleSubtitle
};

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() public widgetData;
  @Input() public values;
  @Input() public nodeId;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public loaded: boolean;

  constructor() { 
    this.loaded = false;

  }

  ngOnInit(): void {
    this.chartOptions = {
      
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: this.widgetData.chartTitle,
        align: "left"
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ],title:{text:this.widgetData.xAxisLabel}
      },  yaxis: {
        title: {
          text: this.widgetData.yAxisLabel
        },
      },
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
    };
  }
  public ngAfterViewInit(): void {
    // this.chart = new ChartComponent();
    this.loaded = true;
  }

  public ngOnChanges(changes: SimpleChanges) {
    let xAxisData=[];
    let seriesData=[];
    this.values.forEach(item => {
      if(this.widgetData.xAxisKey!=='dateTime'){
        xAxisData.push(item[this.widgetData.xAxisKey].value);
      }else{
        xAxisData.push(item[this.widgetData.xAxisKey]);
      }
   
      seriesData.push(item[this.widgetData.yAxisKey].value);
    });

    this.chartOptions={...this.chartOptions,xaxis:{categories:xAxisData},series:[ {
      name: this.widgetData.seriesName,
      data: seriesData
    }]}
  }
}
