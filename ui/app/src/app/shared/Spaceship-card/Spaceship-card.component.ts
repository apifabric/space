import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Spaceship-card.component.html',
  styleUrls: ['./Spaceship-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Spaceship-card]': 'true'
  }
})

export class SpaceshipCardComponent {


}