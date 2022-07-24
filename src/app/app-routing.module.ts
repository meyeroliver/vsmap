import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./ui/dashboard/dashboard.component";
import {SettingsComponent} from "./ui/settings/settings.component";
import {CompanyComponent} from "./ui/company/company.component";
import {CompanyDetailsTabComponent} from "./ui/company/company-details-tab/company-details-tab.component";
import {SupplierDetialsComponent} from "./ui/company/supplier/supplier-detials/supplier-detials.component";

const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'companies', component: CompanyComponent},
  {path: 'companies/create', component: CompanyDetailsTabComponent},
  {path: 'companies/:company', component: CompanyDetailsTabComponent},
  {path: 'companies/:company/suppliers/:supplier', component: SupplierDetialsComponent},
  {path: 'companies/:company/suppliers/create', component: SupplierDetialsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
