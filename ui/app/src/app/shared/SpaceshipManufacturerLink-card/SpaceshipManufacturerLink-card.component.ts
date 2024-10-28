import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SpaceshipManufacturerLink-card.component.html',
  styleUrls: ['./SpaceshipManufacturerLink-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SpaceshipManufacturerLink-card]': 'true'
  }
})

export class SpaceshipManufacturerLinkCardComponent {


}