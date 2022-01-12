import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { DivisionComponent } from './division/division.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppMenuComponent,
    DivisionComponent,
    DashboardComponent,
    FooterComponent,
    DivisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
