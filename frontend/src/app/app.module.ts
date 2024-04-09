import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NavBarComponent } from './Pages/Partials/nav-bar/nav-bar.component';
import { ProductCreateComponent } from './Pages/product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './Pages/Partials/loader/loader.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ProductEditComponent } from './Pages/product-edit/product-edit.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavBarComponent,
    ProductCreateComponent,
    LoaderComponent,
    ProductPageComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
