import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';



const appRoutes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true,});
