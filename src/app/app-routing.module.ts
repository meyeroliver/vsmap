import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingsComponent} from "./settings/settings.component";
import {CompanyComponent} from "./company/company.component";

const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'companies', component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
