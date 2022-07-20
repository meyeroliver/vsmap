import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../../services/company.service";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Company} from "../../../models/company.model";
import {ContactPerson} from "../../../models/contactPerson.model";
import {Address} from "../../../models/address.model";

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  companyForm!: FormGroup;
  company?: Company;
  sameAsPhysical: boolean = false;
  sameAsOwner: boolean = false;

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
    } else {
      this.sameAsOwner = false;
      this.sameAsPhysical = false;
      this.companyForm.reset();
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
        'firstname': new FormControl(null,),
        'lastname': new FormControl(null,),
        'email': new FormControl(null,),
        'cell': new FormControl(null,),
      }),
      'sameAsOwner': new FormControl<any>(false),
      'contactPerson': new FormGroup<any>({
        'firstname': new FormControl(null,),
        'lastname': new FormControl(null,),
        'email': new FormControl(null,),
        'cell': new FormControl(null,),
      }),
      'physicalAddress': new FormGroup<any>({
        'street': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'province': new FormControl(null, Validators.required),
        'country': new FormControl(null, Validators.required),
        'postalCode': new FormControl(null, Validators.required),
      }),
      'sameAsPhysical': new FormControl(false),
      'postalAddress': new FormGroup<any>({
        'street': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'province': new FormControl(null, Validators.required),
        'country': new FormControl(null, Validators.required),
        'postalCode': new FormControl(null, Validators.required),
      }),
    });
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
        'sameAsOwner': this.sameAsOwner,
        'contactPerson': {
          'firstname': this.company?.contactPerson?.firstName,
          'lastname': this.company?.contactPerson?.lastName,
          'email': this.company?.contactPerson?.email,
          'cell': this.company?.contactPerson?.cell
        },
        'physicalAddress': {
          'street': this.company?.physicalAddress?.street,
          'city': this.company?.physicalAddress?.city,
          'province': this.company?.physicalAddress?.province,
          'country': this.company?.physicalAddress?.country,
          'postalCode': this.company?.physicalAddress?.postalCode,
        },
        'samePhysical': this.sameAsPhysical,
        'postalAddress': {
          'street': this.company?.postalAddress?.street,
          'city': this.company?.postalAddress?.city,
          'province': this.company?.postalAddress?.province,
          'country': this.company?.postalAddress?.country,
          'postalCode': this.company?.postalAddress?.postalCode,
        },
      }
    );
  }

  onSameAsOwnerChecked() {
    this.sameAsOwner = !this.sameAsOwner;
    console.log(this.sameAsOwner)
    if (this.sameAsOwner) {
      this.copyOwnersDetialsToContactPerson()
    } else {
      this.companyForm.patchValue({
        'contactPerson': {
          'firstname': '',
          'lastname': '',
          'email': '',
          'cell': '',
        },
      })
    }
  }

  private copyOwnersDetialsToContactPerson() {
    let owner = this.companyForm.getRawValue().owner;
    console.log(owner)
    this.companyForm.patchValue({
      'contactPerson': {
        'firstname': owner.firstname,
        'lastname': owner.lastname,
        'email': owner.email,
        'cell': owner.cell
      },
    })
  }

  onSameAsPhysicalChecked() {
    this.sameAsPhysical = !this.sameAsPhysical;
    if (this.sameAsPhysical) {
      this.copyPhysicalDetailsToContactPerson()
    } else {
      this.companyForm.patchValue({
        'postalAddress': {
          'street': '',
          'city': '',
          'province': '',
          'country': '',
          'postalCode': '',
        },
      })
    }
  }

  copyPhysicalDetailsToContactPerson() {
    let address = this.companyForm.getRawValue().physicalAddress;
    this.companyForm.patchValue({
      'postalAddress': {
        'street': address.street,
        'city': address.city,
        'province': address.province,
        'country': address.country,
        'postalCode': address.postalCode,
      },
    })
  }
}
