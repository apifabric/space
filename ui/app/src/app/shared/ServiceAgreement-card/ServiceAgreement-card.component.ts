import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceAgreement-card.component.html',
  styleUrls: ['./ServiceAgreement-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceAgreement-card]': 'true'
  }
})

export class ServiceAgreementCardComponent {


}