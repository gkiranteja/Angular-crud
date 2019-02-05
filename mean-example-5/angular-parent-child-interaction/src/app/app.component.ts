import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent implements AfterViewInit {

//  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

//    ngAfterViewInit() {
//       this.childComponentRef.viewChildMessage = "Hai this is parent text";
//    }
   
// }


export class AppComponent {
   
   getGreet(name: string){
      alert("hai parent " + name);
   }

}