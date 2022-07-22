import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../../services/company.service";
import {Supplier} from "../../../models/supplier.model";

@Component({
  selector: 'supplier-detials',
  templateUrl: './supplier-detials.component.html',
  styleUrls: ['./supplier-detials.component.scss']
})
export class SupplierDetialsComponent implements OnInit {

  supplierList: Array<Supplier> = [];


  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.supplierList = this.companyService.supplierList;
  }
}
