import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
  
specialEvents = []

  constructor( 
       private eventsService: EventsService,
       private _router: Router
     ) { }

  ngOnInit() {
     this.eventsService.getSpecialEvents()
         .subscribe(
            res => this.specialEvents = res,
            err => {
                 if(err instanceof HttpErrorResponse){
                    if(err.status === 401){
                       this._router.navigate(['/login'])
                    }
                 }
              }
         )
  }

}
