import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Forms} from "../../../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../../../../services/company.service";
import {Supplier} from "../../../../models/supplier.model";

@Component({
  selector: 'supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit, Forms {

  newForm: boolean;
  editable: boolean;
  saveable: boolean;
  supplierForm!: FormGroup;
  supplier?: Supplier;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
    this.companyService.supplierSelected.subscribe((supplier) => {
      this.supplier = supplier;
    })
    this.newForm = this.editable = this.saveable = false;
  }

  ngOnInit(): void {
    this.checkUrl();
    this.setupForm();
    if (this.companyService.getSelectedSupplier() !== null){
      this.supplier = this.companyService.getSelectedSupplier();
      this.populateForm();
    } else {
      this.supplierForm.reset();
    }
  }

  private checkUrl() {
    let url = this.route.snapshot.url;
    this.newForm = (url[2].path === 'suppliers' && url[3].path === 'create');
    this.editable = !this.newForm;
    this.saveable = this.newForm;
  }

  populateForm(): void {
    this.supplierForm.patchValue({
        'supplier': this.supplier?.name,
        'firstname': this.supplier?.contactPerson.firstname,
        'lastname': this.supplier?.contactPerson.lastname,
        'email': this.supplier?.contactPerson.email,
        'cell': this.supplier?.contactPerson.cell,
      }
    )
  }

  setupForm(): void {
    this.supplierForm = new FormGroup<any>({
      'supplier': new FormControl(null, Validators.required),
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'cell': new FormControl(null, [Validators.required,]),
    });
  }

  onEditClicked() {
    this.editable = !this.editable;
    this.saveable = !this.saveable;
  }

  onSaveClicked() {
    alert('Still under construction')
    this.onEditClicked();
  }

}
