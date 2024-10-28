import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TestDrife-card.component.html',
  styleUrls: ['./TestDrife-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TestDrife-card]': 'true'
  }
})

export class TestDrifeCardComponent {


}