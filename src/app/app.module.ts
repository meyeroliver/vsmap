import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { MatRadioModule } from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from "@angular/material/tabs";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './ui/app-bar/app-bar.component';
import { SideNavComponent } from './ui/side-nav/side-nav.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { SettingsComponent } from './ui/settings/settings.component';
import { CompanyComponent } from './ui/company/company.component';
import { SupplierFormComponent } from './ui/company/supplier-form/supplier-form.component';
import { CustomerFormComponent } from './ui/company/customer-form/customer-form.component';
import {CompanyDetailsTabComponent} from "./ui/company/company-details-tab/company-details-tab.component";
import {CompanyFormComponent} from "./ui/company/company-form/company-form.component";
import {CompanyListComponent} from "./ui/company/company-list/company-list.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CompanyService} from "./services/company.service";

@NgModule({
  declarations: [
    AppComponent, AppBarComponent, SideNavComponent, DashboardComponent, SettingsComponent, CompanyListComponent,
    CompanyComponent, CompanyDetailsTabComponent, CompanyFormComponent, SupplierFormComponent, CustomerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
