import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./ui/dashboard/dashboard.component";
import {SettingsComponent} from "./ui/settings/settings.component";
import {CompanyComponent} from "./ui/company/company.component";
import {CompanyDetailsTabComponent} from "./ui/company/company-details-tab/company-details-tab.component";

const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {
    path: 'companies', component: CompanyComponent,
    children: [
      {path: 'create', component: CompanyDetailsTabComponent},
      {path: ':name', component: CompanyDetailsTabComponent,
        children:[
          {path: 'suppliers/:name', component: SettingsComponent},
          {path: 'customers', component: CompanyDetailsTabComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
