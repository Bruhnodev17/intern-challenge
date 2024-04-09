import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { ProductCreateComponent } from './Pages/product-create/product-create.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ProductEditComponent } from './Pages/product-edit/product-edit.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, title: 'Home Page' },
  {path: 'about-us', component: AboutPageComponent, title: 'About Us' },
  {path: 'contact-us', component: ContactPageComponent, title: 'Contact Us' },
  {path: 'products', component: ProductPageComponent, title: 'Products' },
  {path: 'product/create', component: ProductCreateComponent, title: 'Product Create' },
  {path: 'products/:id/edit', component: ProductEditComponent, title: 'Product Edit' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
