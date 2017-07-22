import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppComponent, HelloComponent} from './components';
import {TrimPipe} from './pipes';
import {APP_ROUTER} from './app.routes';
import {APP_PROVIDERS} from './app.providers';

@NgModule({
    bootstrap: [AppComponent],

    declarations: [
        AppComponent,
        HelloComponent,
        TrimPipe
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,


        APP_ROUTER
    ],

    providers: [APP_PROVIDERS]
})

export class AppModule {}