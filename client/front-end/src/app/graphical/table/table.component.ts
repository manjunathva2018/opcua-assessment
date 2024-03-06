import { Component, OnInit,Input,SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() public widgetData;
  @Input() public values;
  @Input() public nodeId;
  public loaded: boolean;
  series:any=[];
  labels:any=[];

  constructor() {this.loaded = false; }

  ngOnInit(): void {
  }

  
  public ngAfterViewInit(): void {
    // this.chart = new ChartComponent();
    this.loaded = true;
  }

  public ngOnChanges(changes: SimpleChanges) {
    let series=[];
    let labels=[];
    this.values.forEach(item => {
      let arrSeries=[];
      let label=new Set();
      this.widgetData.seriesChart.forEach(el=>{
        if(item[el.seriesKey]){
          if(item[el.seriesKey]!=='dateTime'){
            arrSeries.push(item[el.seriesKey].value);
          }else{
            arrSeries.push(item[el.seriesKey]);
          }
          label.add(el.seriesLabel);
        }
      })
      series.push(arrSeries)
      labels=[...label];
    });
this.series=series;
this.labels=labels;
  }

}
