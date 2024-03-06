import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  values: any[] = [];
  nodeId: string;
  connectForm: FormGroup;
  readFromNodeForm:FormGroup;
  serverUrl:string='';
  isConnect:boolean=false;
  retryConnect:boolean=false;
  hideConn:boolean=false;
  connectionLogs=[];
  dataLogs=[];
  hideNode:boolean=false;
widgets=[];
lastValues:number=-1;
  constructor(private socket: Socket,private fb: FormBuilder) {
    this.connectForm = this.fb.group({
      connectionStr: ['', Validators.required],
    });
    this.readFromNodeForm = this.fb.group({
      nodeId: ['', Validators.required],
    });
  }

  
  
  getMessage(): any {
    return this.socket.fromEvent('values').pipe(debounceTime(500));
  }

  ngOnInit(): void {
    this.getMessage().subscribe(
      (data) => {
        this.dataLogs.push({msg:JSON.stringify(data),time:new Date()});
        this.values.push(data.decodedData);
        this.dataLogs= this.dataLogs.slice(this.lastValues);
        this.values= this.values.slice(this.lastValues);
        // Handle data
      },
      (err) => {
        console.log(err);
      }
    );

    this.socket.fromEvent('connection-success').subscribe((data:any)=>{
    this.serverUrl=data;
    this.isConnect=false;
    this.retryConnect=false;
    this.connectionLogs.push({msg:"connection is successful.",time:new Date()});
    this.hideConn=true;
    })

    this.socket.fromEvent('connection-retry').subscribe((data:any)=>{
      this.retryConnect=true;
      this.connectionLogs.push({msg:"Trying to re-connect",time:new Date()});
      })

      this.socket.fromEvent('connection-failed').subscribe((data:any)=>{
        this.hideConn=false;
      this.connectionLogs.push({msg:"Failed to establish the connection, "+data,time:new Date()});
      })

      this.socket.fromEvent('disconnected').subscribe((data:any)=>{
        this.hideConn=false;
        this.hideNode=false;
      this.connectionLogs.push({msg:"Disconnected",time:new Date()});
      })
      this.socket.fromEvent('disconnect-error').subscribe((data:any)=>{
        this.hideConn=false;
      this.connectionLogs.push({msg:"Error while disconnecting "+data,time:new Date()});
      })
      this.socket.fromEvent('session-create-error').subscribe((data:any)=>{
        this.hideNode=false;
      this.connectionLogs.push({msg:"Error while creating a session "+data,time:new Date()});
      })
      this.socket.fromEvent('session-read-error').subscribe((data:any)=>{
        this.hideNode=false;
        this.dataLogs.push({msg:"Error while Reading the data "+data,time:new Date()});
        })

      this.socket.fromEvent('session-disconnect').subscribe((data:any)=>{
        this.hideNode=false;
      this.connectionLogs.push({msg:"Session disconnected from the node",time:new Date()});
      })

      this.socket.fromEvent('session-disconnect-error').subscribe((data:any)=>{
      this.connectionLogs.push({msg:"Error While disconnecting the current session"+data,time:new Date()});
      })

      this.socket.fromEvent('session-created').subscribe((data:any)=>{
        this.hideNode=true;
        this.nodeId=data;
      this.connectionLogs.push({msg:"Session created for "+data,time:new Date()});
      })
  

            

  }

  connectToOpcua(){
    if (this.connectForm.valid) {
      this.isConnect=true;
      this.connectionLogs.push({msg:"Trying to establish an connection to opc ua server.",time:new Date()});
      // Form is valid, handle submission
      console.log(this.connectForm.value);
      this.socket.emit('connect-to-opcua',this.connectForm.value.connectionStr);
    } else {
      // Form is invalid, display error messages
    }

  }

  readDataFromNode(){
    if(this.readFromNodeForm.valid){
      console.log(this.readFromNodeForm.value);
      this.socket.emit('create-session-read-data',this.readFromNodeForm.value.nodeId);
      this.connectionLogs.push({msg:"Trying to create a session to read data from a node.",time:new Date()});
    }else{

    }
    
  }

  disconnectFromOpcua(){
    this.connectForm.patchValue({connectionStr:''});
    this.socket.emit('disconnect-from-opcua');
    this.connectionLogs.push({msg:"Trying to disconnect the existing connection to opc ua server.",time:new Date()});
    this.hideConn=false;
  }

  disconnectTheSession(){
    this.readFromNodeForm.patchValue({nodeId:''});
    this.socket.emit('disconnect-from-session');
    this.connectionLogs.push({msg:"Trying to disconnect the session of the existing node",time:new Date()});
  }

  addWidget(evt){
    this.widgets.push(evt);
    console.log(evt);
  }

  deleteWidget(i){
    this.widgets.splice(i,1);
  }
}
