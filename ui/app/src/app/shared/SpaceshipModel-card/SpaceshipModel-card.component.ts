import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SpaceshipModel-card.component.html',
  styleUrls: ['./SpaceshipModel-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SpaceshipModel-card]': 'true'
  }
})

export class SpaceshipModelCardComponent {


}