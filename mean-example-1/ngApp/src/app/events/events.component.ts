import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
 
events = []

  constructor( private _eventsService : EventsService ) { }

  ngOnInit() {
     this._eventsService.getEvents()
         .subscribe(
             res => this.events = res,
             err => console.log(err)
         )
  }

}
