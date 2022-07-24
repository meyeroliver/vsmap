import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Forms} from "../../../../interfaces";
import {Supplier} from "../../../../models/supplier.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyService} from "../../../../services/company.service";

@Component({
  selector: 'supplier-detials-card',
  templateUrl: './supplier-detials-card.component.html',
  styleUrls: ['./supplier-detials-card.component.scss']
})
export class SupplierDetialsCardComponent implements OnInit, Forms {

  @Input() supplier?: Supplier;
  supplierDetailsform!: FormGroup;
  title?: string;

  constructor(private router: Router, private route: ActivatedRoute,
              private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.setupForm();
    this.populateForm();
    this.title = this.supplier?.name
  }

  populateForm(): void {
    this.supplierDetailsform.patchValue({
        'firstname': this.supplier?.contactPerson.firstname,
        'lastname': this.supplier?.contactPerson.lastname,
        'email': this.supplier?.contactPerson.email,
        'cell': this.supplier?.contactPerson.cell,
      }
    )
  }

  setupForm(): void {
    this.supplierDetailsform = new FormGroup<any>({
      'firstname': new FormControl({value: null, disabled: true}, Validators.required),
      'lastname': new FormControl({value: null, disabled: true}, Validators.required),
      'email': new FormControl({value: null, disabled: true}, [Validators.required, Validators.email]),
      'cell': new FormControl({value: null, disabled: true}, [Validators.required,]),
    });
  }


}
