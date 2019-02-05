import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  
  //@Input("logdinUser") login: boolean;

  @Input() messageDisplay: boolean;

  //private _messageDisplay: boolean;
  message: string;

  viewChildMessage: string;

// template reference variable
  name = "kiran teja goud";
  eventTrigger(){
    alert("hi");
 }



 //output and event emitter
@Output() greetEvent = new EventEmitter();
  getName = "hello kiran";

getTrigger(){
   this.greetEvent.emit(this.getName);
}




  // get messageDisplay(): boolean{
  //    return this._messageDisplay;
  // }
  // @Input()
  // set messageDisplay(value: boolean){
  //     this._messageDisplay = value;
  //     if (value === true){
  //         this.message = "welcome back kiran"
  //     } else {
  //         this.message = "Please Login"
  //     }
      
  // }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
     console.log(changes);
     const loggedInValue = changes['messageDisplay']
     if(loggedInValue.currentValue === true){
        this.message = "welcome back kiran"
     } else {
          this.message = "Please Login"
      }  
  }


 


}
