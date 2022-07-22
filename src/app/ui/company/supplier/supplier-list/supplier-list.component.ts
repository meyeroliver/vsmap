import {Component, OnInit} from '@angular/core';
import {Supplier} from "../../../../models/supplier.model";
import {CompanyService} from "../../../../services/company.service";

@Component({
  selector: 'supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  supplierList: Array<Supplier> = [];
  public innerHeight: any;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.supplierList = this.companyService.supplierList;
    this.innerHeight = window.innerHeight + 48;
  }

  onCreateNewSupplier(supplier: Supplier) {

  }
}
