import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent } 
];

appRoutes.push({ path: 'links', component: LinksComponent });