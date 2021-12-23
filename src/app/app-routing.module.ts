import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisiComponent } from './divisi/divisi.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'divisi', component:DivisiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
