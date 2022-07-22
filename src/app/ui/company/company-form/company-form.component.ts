import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../../services/company.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Company} from "../../../models/company.model";
import {ActivatedRoute} from "@angular/router";
import {Forms} from "../../../interfaces";

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit, Forms {

  companyForm!: FormGroup;
  company?: Company;
  sameAsPhysical: boolean = false;
  sameAsOwner: boolean = false;
  newForm: boolean;
  editable: boolean;

  constructor(private companyService: CompanyService, private route: ActivatedRoute) {
    this.companyService.companySelected.subscribe((company) => {
      this.company = company;
      this.populateForm();
    })
    this.newForm =  this.route.snapshot.url[0].path === 'create';
    this.editable = !this.newForm;
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

  setupForm() {
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
        'cell': new FormControl(null, [Validators.required,]),
      }),
      'sameAsOwner': new FormControl<any>(false),
      'contactPerson': new FormGroup<any>({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'cell': new FormControl(null, [Validators.required,]),
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
          'firstname': this.company?.owner?.firstname,
          'lastname': this.company?.owner?.lastname,
          'email': this.company?.owner?.email,
          'cell': this.company?.owner?.cell,
        },
        'sameAsOwner': this.sameAsOwner,
        'contactPerson': {
          'firstname': this.company?.contactPerson?.firstname,
          'lastname': this.company?.contactPerson?.lastname,
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

  getCurrentFormData(): Company{
    let companyFormData = this.companyForm.getRawValue();
    return new Company(0, companyFormData.companyName, companyFormData.vatNumber,
      companyFormData.staffCount, companyFormData.owner, companyFormData.contactPerson,
      companyFormData.physicalAddress, companyFormData.postalAddress, companyFormData.env.industry,
      companyFormData.env.businessType, companyFormData.env.production);
  }

  onEditClicked(){
    this.editable = !this.editable;
    this.newForm = !this.newForm;
  }

  onSaveClicked(){
    let company: Company = this.getCurrentFormData();
    if (this.newForm){
       this.companyService.saveCompany(company);
    } else {
      this.companyService.updateCompany(company);
    }
    this.onEditClicked();
  }
}
