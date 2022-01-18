import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { DivisionComponent } from './division/division.component';
import { XyzComponent } from './xyz/xyz.component';
import { TambahComponent } from './tambah/tambah.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { HapusComponent } from './hapus/hapus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppMenuComponent,
    DivisionComponent,
    DashboardComponent,
    FooterComponent,
    DivisionComponent,
    XyzComponent,
    TambahComponent,
    EditComponent,
    HapusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
