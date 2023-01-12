import { Component, OnInit,EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srCreated') serverCreated: any=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated: any=new EventEmitter<{serverName:string,serverContent:string}>();
  // newServerName='';
  // newServerContent='';

  @ViewChild('serverContentInput') serverContentInputs: any;
  
  constructor(){

  }

  ngOnInit() {

  }

  onAddServer(nameInput: HTMLInputElement){
    console.log(this.serverContentInputs)
    // console.log(nameInput.value)
    // this.serverCreated.emit({serverName:nameInput.value,serverContent:this.newServerContent});
  }
  
  onAddBluePrint(nameInput:HTMLInputElement){
    console.log(this.serverContentInputs)
    // console.log(nameInput.value)
    // this.bluePrintCreated.emit({serverName:nameInput.value,serverContent:this.newServerContent});
  }
}
