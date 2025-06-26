import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component';
import { LinksComponent } from './links/links.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-confirmation', component: ContactConfirmationComponent },
  { path: 'links', component: LinksComponent }
];
