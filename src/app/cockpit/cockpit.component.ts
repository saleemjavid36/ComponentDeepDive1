import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srCreated') serverCreated: any=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated: any=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName='';
  newServerContent='';
  
  constructor(){

  }

  ngOnInit() {

  }

  onAddServer(){
   this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
  
  onAddVluePrint(){
    this.bluePrintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
}
