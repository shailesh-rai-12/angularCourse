import { Component, OnInit,Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
  
@Input('srvElement') element:{name:string,type:string,content:string};
@Input('name') name:string;
  constructor() {
    console.log("constructor called");
    
   }
  
  

   ngOnChanges(changes:SimpleChanges){
      console.log("Onchanges");
      console.log(changes);
      
      
   }

  ngOnInit(): void {
      console.log("On init called");

  }

  ngDoCheck(){
      console.log("do check called");
      
  }

   
  ngAfterContentInit(): void {
    console.log("after content init");
    
  }

  ngAfterContentChecked(): void {
   console.log("After content checked");
   
  }
  
  ngAfterViewInit(): void {
    console.log("After view init");
    
  }

  ngAfterViewChecked(): void {
    console.log("After view checked");
    
  }

  ngOnDestroy(): void {
    console.log("on destroy called");
    
  }
  
  

}
