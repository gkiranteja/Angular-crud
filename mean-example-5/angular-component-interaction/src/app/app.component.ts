import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
   name = "Angular component interaction"
   count = 0;
   user: string;
   userChange: string;
   private _getterSetter: string;
   @ViewChild('name') nameRef: ElementRef;

   ngAfterViewInit(){
      this.nameRef.nativeElement.focus();
      console.log(this.nameRef);
   }

   
   //this is nothing but a function it returns a private property
   get getterSetter(): string {
       return this._getterSetter;
   }
   //set is a function that accepts a value and assigns the passing value to the private property
   set getterSetter(value: string){
      this._getterSetter = value;
      if(value == "ram"){
         alert("hello ");
      }
   }
   



   countValue(){
      this.count += 1;
   }

   userChangeMethod(userChangeName){
     this.userChange = userChangeName;
     if(userChangeName == "kiran"){
        alert("hai " + userChangeName)
     }
   }

}
