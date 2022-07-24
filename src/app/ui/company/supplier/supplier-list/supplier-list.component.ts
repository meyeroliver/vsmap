import {Component, OnInit} from '@angular/core';
import {Supplier} from "../../../../models/supplier.model";
import {CompanyService} from "../../../../services/company.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  supplierList: Array<Supplier> = [];
  public innerHeight: any;

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.supplierList = this.companyService.supplierList;
    this.innerHeight = window.innerHeight + 48;
  }

  onCreateNewSupplier() {
    this.router.navigate([`suppliers/create`], {relativeTo: this.route}).then();
  }

  onSupplierClicked(supplier: Supplier){
    this.companyService.supplierSelected.emit(supplier);
    this.companyService.setSelectedSupplier(supplier);
    this.router.navigate([`suppliers/${supplier.name}`], {relativeTo: this.route}).then();
  }
}

