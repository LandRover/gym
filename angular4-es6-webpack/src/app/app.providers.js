import {HashLocationStrategy, LocationStrategy} from '@angular/common';

export const APP_PROVIDERS = [
    {provide: 'AUTHOR', useValue: 'LR'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
];