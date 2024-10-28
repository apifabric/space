import { Injector, ViewChild, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OFormComponent, OntimizeService, OListPickerComponent, OTableComponent, ORealPipe, ONIFInputComponent } from 'ontimize-web-ngx';


@Component({
  selector: 'Spaceship-detail',
  templateUrl: './Spaceship-detail.component.html',
  styleUrls: ['./Spaceship-detail.component.scss']
})
export class SpaceshipDetailComponent implements OnInit  {
  protected service: OntimizeService;

  @ViewChild('oDetailForm') form: OFormComponent;
  
  constructor(protected injector: Injector) {
    this.service = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    this.configureService();
  }

  protected configureService() {
    const conf = this.service.getDefaultServiceConfiguration();
    conf['path'] = '/Spaceship';
    this.service.configureService(conf);
  }
  onDataLoaded(e: object) {
    console.log(JSON.stringify(e));
  }

}