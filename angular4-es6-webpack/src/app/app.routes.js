import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './components';

export const APP_ROUTES  = [
  {path: '', component: AppComponent, pathMatch: 'full'}
];

export const APP_ROUTER  = RouterModule.forRoot(APP_ROUTES, {useHash: true});

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {}