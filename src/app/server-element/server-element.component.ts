import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
   encapsulation:ViewEncapsulation.Emulated // None,Native
})
export class ServerElementComponent implements
 OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy{
  // ! its used because to not get 
  @Input('srvElement') element!: { type: string, name: string, content: string};
  @Input() name :string |  any;
  @ViewChild('heading') header:ElementRef | any 

  constructor(){
    console.log('constructed called')
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit(){;
    console.log('ngOnInit called')
    console.log('Text Content ' + this.header.nativeElement.textContent)
  }
  
  ngDoCheck() {
    console.log('ngDOCheck called')
    
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentInit called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
    console.log('Text Content ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngafterViewCheked called')
  }
  ngOnDestroy() {
    console.log('onDestroy Called')
  }
 
  
  
  
  
 

  

}
