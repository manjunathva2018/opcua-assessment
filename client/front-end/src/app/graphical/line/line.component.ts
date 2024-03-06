import { Component, OnInit,ViewChild, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import {
  ChartComponent,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  yaxis:ApexYAxis
};

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @Input() public widgetData;
  @Input() public values;
  @Input() public nodeId;
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions :Partial<ChartOptions>;
  public loaded: boolean;

  constructor() { 
    this.loaded = false;
  }

  ngOnInit(): void {
    this.chartOptions = {
     
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        },  toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: this.widgetData.chartTitle,
        align: "left"
      },
      grid: {
        // row: {
        //   colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        //   opacity: 0.5
        // }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ],title:{text:this.widgetData.xAxisLabel}
      },
      yaxis: {
        title: {
          text: this.widgetData.yAxisLabel
        },
      },
      series: [
        {
          name: this.widgetData.seriesName,
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
    };
   
    console.log(this.chartOptions)
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
