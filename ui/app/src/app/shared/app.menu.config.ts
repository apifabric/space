import { MenuRootItem } from 'ontimize-web-ngx';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { InsurancePolicyCardComponent } from './InsurancePolicy-card/InsurancePolicy-card.component';

import { LoanCardComponent } from './Loan-card/Loan-card.component';

import { ManufacturerCardComponent } from './Manufacturer-card/Manufacturer-card.component';

import { SaleCardComponent } from './Sale-card/Sale-card.component';

import { SalespersonCardComponent } from './Salesperson-card/Salesperson-card.component';

import { ServiceAgreementCardComponent } from './ServiceAgreement-card/ServiceAgreement-card.component';

import { ServiceRecordCardComponent } from './ServiceRecord-card/ServiceRecord-card.component';

import { SpaceshipCardComponent } from './Spaceship-card/Spaceship-card.component';

import { SpaceshipManufacturerLinkCardComponent } from './SpaceshipManufacturerLink-card/SpaceshipManufacturerLink-card.component';

import { SpaceshipModelCardComponent } from './SpaceshipModel-card/SpaceshipModel-card.component';

import { TestDrifeCardComponent } from './TestDrife-card/TestDrife-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'InsurancePolicy', name: 'INSURANCEPOLICY', icon: 'view_list', route: '/main/InsurancePolicy' }
    
        ,{ id: 'Loan', name: 'LOAN', icon: 'view_list', route: '/main/Loan' }
    
        ,{ id: 'Manufacturer', name: 'MANUFACTURER', icon: 'view_list', route: '/main/Manufacturer' }
    
        ,{ id: 'Sale', name: 'SALE', icon: 'view_list', route: '/main/Sale' }
    
        ,{ id: 'Salesperson', name: 'SALESPERSON', icon: 'view_list', route: '/main/Salesperson' }
    
        ,{ id: 'ServiceAgreement', name: 'SERVICEAGREEMENT', icon: 'view_list', route: '/main/ServiceAgreement' }
    
        ,{ id: 'ServiceRecord', name: 'SERVICERECORD', icon: 'view_list', route: '/main/ServiceRecord' }
    
        ,{ id: 'Spaceship', name: 'SPACESHIP', icon: 'view_list', route: '/main/Spaceship' }
    
        ,{ id: 'SpaceshipManufacturerLink', name: 'SPACESHIPMANUFACTURERLINK', icon: 'view_list', route: '/main/SpaceshipManufacturerLink' }
    
        ,{ id: 'SpaceshipModel', name: 'SPACESHIPMODEL', icon: 'view_list', route: '/main/SpaceshipModel' }
    
        ,{ id: 'TestDrife', name: 'TESTDRIFE', icon: 'view_list', route: '/main/TestDrife' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CustomerCardComponent

    ,InsurancePolicyCardComponent

    ,LoanCardComponent

    ,ManufacturerCardComponent

    ,SaleCardComponent

    ,SalespersonCardComponent

    ,ServiceAgreementCardComponent

    ,ServiceRecordCardComponent

    ,SpaceshipCardComponent

    ,SpaceshipManufacturerLinkCardComponent

    ,SpaceshipModelCardComponent

    ,TestDrifeCardComponent

];