import { Injector, ViewChild, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OFormComponent, OntimizeService, OListPickerComponent, OTableComponent, ORealPipe, ONIFInputComponent } from 'ontimize-web-ngx';


@Component({
  selector: 'SpaceshipModel-detail',
  templateUrl: './SpaceshipModel-detail.component.html',
  styleUrls: ['./SpaceshipModel-detail.component.scss']
})
export class SpaceshipModelDetailComponent implements OnInit  {
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
    conf['path'] = '/SpaceshipModel';
    this.service.configureService(conf);
  }
  onDataLoaded(e: object) {
    console.log(JSON.stringify(e));
  }

}