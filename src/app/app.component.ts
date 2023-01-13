import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  serverElements=[{type:'server',name:'TestServer',content:'Just a test!'}]; 
  // @Input() element!: { type: string, name: string, content: string};
  // serverElements:[] | any=[];
  // serverElements:number[]=[]
  

  // console.log()

  onChangeFirsts(){
    this.serverElements[0].name='!Changes'
  }
  onDestroyFirsts(){
    this.serverElements[0].name='!Changes'
  }
  
  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }
  
  onBluePrintAdded(bluePrintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:bluePrintData.serverName,
      content:bluePrintData.serverContent
    })

  
  }
  


}
