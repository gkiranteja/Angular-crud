import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
      this._interactionService.teacherMessageSource$
          .subscribe(
              message => {
                 if(message === 'Good Morning') {
                   alert('Good Morning teacher');
                 } else if (message === 'well done') {
                    alert("thank you teached");
                 }
              } 
          )
  }

}
