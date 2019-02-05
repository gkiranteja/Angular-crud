import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-service-interaction';

  constructor(private _interactionService: InteractionService) { }

  greetingsMessage(){
     this._interactionService.sendMessage('Good Morning');
  }

  appreciateMessage(){
     this._interactionService.sendMessage('Well Done');
  }

}
