import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../../services/company.service";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Company} from "../../../models/company.model";

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  companyForm!: FormGroup;
  company?: Company;

  constructor(private companyService: CompanyService) {
    this.companyService.companySelected.subscribe((company) => {
      this.company = company;
      this.populateForm();
    })
  }

  ngOnInit(): void {
    this.setupForm();
    if (this.companyService.getSelectedCompany() !== null) {
      this.company = this.companyService.getSelectedCompany();
      this.populateForm();
    }
  }

  private setupForm() {
    this.companyForm = new FormGroup<any>({
      'companyName': new FormControl(null, Validators.required),
      'vatNumber': new FormControl(null, Validators.required),
      'staffCount': new FormControl(null, Validators.required),
      'env': new FormGroup<any>({
        'industry': new FormControl(null),
        'businessType': new FormControl(null),
        'production': new FormControl(null),
      }),
      'owner': new FormGroup<any>({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'cell': new FormControl(null, [Validators.required, Validators.min(10), Validators.max(12)]),
      }),
      'contactPerson': new FormGroup<any>({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'cell': new FormControl(null, [Validators.required, Validators.min(10), Validators.max(12)]),
      }),


    })
  }

  populateForm() {

    this.companyForm.patchValue({
        'companyName': this.company?.name,
        'vatNumber': this.company?.vatNumber,
        'staffCount': this.company?.staffCount,
        'env.industry': this.company?.industry,
        'env.businessType': this.company?.businessType,
        'env.production': this.company?.production,
        'owner': {
          'firstname': this.company?.owner?.firstName,
          'lastname': this.company?.owner?.lastName,
          'email': this.company?.owner?.email,
          'cell': this.company?.owner?.cell,
        },
        'contactPerson': {
          'firstname': this.company?.contactPerson?.firstName,
          'lastname': this.company?.contactPerson?.lastName,
          'email': this.company?.contactPerson?.email,
          'cell': this.company?.contactPerson?.cell
        }
      }
    );
  }

}
