import { Component, OnInit ,SimpleChanges,EventEmitter, Output,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-widget',
  templateUrl: './create-widget.component.html',
  styleUrls: ['./create-widget.component.scss']
})
export class CreateWidgetComponent implements OnInit {
  @Input() public nodeId;
  @Input() public hideNode;
  @Output() createWidget = new EventEmitter<any>();


  O5D100YOptions=[  {label:'distance',unit:'cm'}];
  O5D100XOptions=[  {label:'switchState',unit:''},  {label:'dateTime',unit:''}];
  VVB001YOptions=[{label:'fatigue',unit:'m/s'},
  {label:'impact',unit:'m/s^2'},
  {label:'friction',unit:'m/s^2'},
  {label:'temperature',unit:'°C'},
  {label:'crest',unit:''},
  {label:'impact',unit:''}];
  VVB001XOptions=[  {label:'status',unit:''},{label:'out1',unit:''},{label:'out2',unit:''},  {label:'dateTime',unit:''}];
xAxisOption:any=[];
yAxisOption:any=[];

seriesKeyOption:any=[];
seriesKeyO5D100=[{label:'distance',unit:'cm'}];
seriesKeyVVB001=[{label:'fatigue',unit:'m/s'},
{label:'impact',unit:'m/s^2'},
{label:'friction',unit:'m/s^2'},
{label:'temperature',unit:'°C'},
{label:'crest',unit:''},
{label:'impact',unit:''}];

  widgetForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.widgetForm = this.fb.group({
      widgetName: [''],
      widgetType: [''],
      chartTitle: [''],
      xAxisLabel: [''],
      xAxisKey: [''],
      xAxisUnit: [''],
      yAxisLabel: [''],
      yAxisKey: [''],
      yAxisUnit: [''],
      seriesName:[''],
      seriesChart: this.fb.array([])
    });
   }

  ngOnInit(): void {

  }

   // Getter for easier access to FormArray
   get seriesArray() {
    return this.widgetForm.get('seriesChart') as FormArray;
  }

  // Method to add a new email FormControl
  addRow() {
    this.seriesArray.push(this.fb.group({
      seriesKey:[''],
      seriesLabel:['']
    }));
  }

  // Method to remove an email FormControl
  removeRow(index: number) {
    this.seriesArray.removeAt(index);
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.seriesArray.clear();
    if(this.nodeId=='ns=1;s=O5D100'){
      this.xAxisOption=this.O5D100XOptions;
      this.yAxisOption=this.O5D100YOptions;
    }
    if(this.nodeId=='ns=1;s=VVB001'){
      this.xAxisOption=this.VVB001XOptions;
      this.yAxisOption=this.VVB001YOptions;
    }
  }

  chartTypeChange(){
    this.seriesArray.clear();
    if(this.nodeId=='ns=1;s=O5D100'){
    if(this.widgetForm.get('widgetType').value=='TABLE'){
      this.seriesKeyOption=[...this.O5D100XOptions,...this.O5D100YOptions];
    }else{  this.seriesKeyOption=this.seriesKeyO5D100;}
  }
  if(this.nodeId=='ns=1;s=VVB001'){
    if(this.widgetForm.get('widgetType').value=='TABLE'){
      this.seriesKeyOption=[...this.VVB001XOptions,...this.VVB001YOptions];
    }else{   this.seriesKeyOption=this.seriesKeyVVB001;}
  }
  }

  changeXAxisKey(evt){
    let val=evt.target.value;
   let filtered= this.xAxisOption.filter(el=>el.label==val)[0];
   this.widgetForm.get('xAxisUnit').setValue(filtered.unit);
  }
  changeYAxisKey(evt){
    let val=evt.target.value;
    let filtered= this.yAxisOption.filter(el=>el.label==val)[0];
    this.widgetForm.get('yAxisUnit').setValue(filtered.unit);
  }

  create(){
    if (this.widgetForm.valid) {
    this.createWidget.emit(this.widgetForm.value);

    this.widgetForm.patchValue({widgetName:'',widgetType:'',chartTitle:'',xAxisLabel:'',xAxisKey:'',xAxisUnit:'',yAxisLabel:'',yAxisKey:'',yAxisUnit:'',seriesName:''})
    }else{

    }
  }

}
