import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {CompanyService} from "../../services/company.service";
import {Company} from "../../models/company.model";
import {Router} from "@angular/router";

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyList: Array<Company> = [];

  constructor(private breakpointObserver: BreakpointObserver,
              private companyService: CompanyService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.companyService.companyList.length == 0) {
      this.companyService.generateMockCompanies();
    }
    this.companyList = this.companyService.companyList;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches), shareReplay()
    );

  onCreateNewCompany() {
    this.onSelectCompany(null!);
    this.router.navigate(['/companies/create']).then();
  }

  onSelectCompany(company: Company) {
    this.companyService.setSelectedCompany(company)
    this.companyService.companySelected.emit(company);
    this.router.navigate([`/companies/${company.name}`]).then();
    console.log(company);
  }
}
