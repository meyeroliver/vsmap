import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {CompanyService} from "../../services/company.service";
import {Company} from "../../models/company.model";

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyList: Array<Company> = [];
  constructor(private breakpointObserver: BreakpointObserver, private companyService: CompanyService) {}

  ngOnInit(): void {
    if (this.companyService.companyList.length == 0){
      this.companyService.generateMockCompanies();
    }
    this.companyList = this.companyService.companyList;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  onSelectCompany(company:Company){
    this.companyService.setSelectedCompany(company)
    this.companyService.companySelected.emit(company);
  }
}
