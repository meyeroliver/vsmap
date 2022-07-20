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
    this.companyService.companySelected.subscribe((company)=>{
     this.company = company;
     this.populateForm();
    })
  }

  ngOnInit(): void {
    this.setupForm();
    if (this.companyService.getSelectedCompany() !== null){
      this.company = this.companyService.getSelectedCompany();
      this.populateForm();
    }
  }

  private setupForm(){
    this.companyForm = new FormGroup<any>({
      'companyName': new FormControl(null, Validators.required),
      'vatNumber': new FormControl(null, Validators.required),
      'staffCount': new FormControl(null, Validators.required),
      'industry': new FormControl(null),
      'businessType': new FormControl(null),
      'production': new FormControl(null),
      'ownerFirstname': new FormControl(null, Validators.required),
      'ownerLastname': new FormControl(null,Validators.required),
      'ownerEmail': new FormControl(null, [Validators.required, Validators.email]),
      'ownerCell': new FormControl(null, [Validators.required, Validators.min(10), Validators.max(12)]),
      'contactPersonFirstname': new FormControl(null, Validators.required),
      'contactPersonLastname': new FormControl(null, Validators.required),
      'contactPersonEmail': new FormControl(null, [Validators.required, Validators.email]),
      'contactPersonCell': new FormControl(null, [Validators.required, Validators.min(10), Validators.max(12)]),

    })
  }

  populateForm(){

    this.companyForm.patchValue({
        'companyName': this.company?.name,
      'vatNumber': this.company?.vatNumber,
      'staffCount': this.company?.staffCount,
      'industry': this.company?.industry,
      'businessType': this.company?.businessType,
      'production': this.company?.production,
      'ownerFirstname': this.company?.owner?.firstName,
      'ownerLastname': this.company?.owner?.lastName,
      'ownerEmail': this.company?.owner?.email,
      'ownerCell': this.company?.owner?.cell,
      'contactPersonFirstname': this.company?.contactPerson?.firstName,
      'contactPersonLastname': this.company?.contactPerson?.lastName,
      'contactPersonEmail': this.company?.contactPerson?.email,
      'contactPersonCell': this.company?.contactPerson?.cell
      }
    );
  }

}
