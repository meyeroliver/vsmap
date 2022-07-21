import {EventEmitter, Injectable} from "@angular/core";
import {Company} from "../models/company.model";
import {ContactPerson} from "../models/contactPerson.model";
import {Address} from "../models/address.model";

@Injectable()
export class CompanyService {

  private selectedCompany?: Company;
  private listLength: number = 3;
  private ownersList: Array<ContactPerson> = [];
  private contactPersonList: Array<ContactPerson> = [];
  private addressList: Array<Address> = [];
  companyList: Array<Company> = [];
  companySelected = new EventEmitter<Company>();
  //companySelected = new EventEmitter<Company>();

  setSelectedCompany(company: Company) {
    this.selectedCompany = company;
  }

  getSelectedCompany(): Company {
    return this.selectedCompany!;
  }

  private generateMockOwners() {
    let ownerNameList = ['Pitte', 'Kop', 'Hond'];
    let ownerLastList = ['een', 'twee', 'drie'];
    let cellNumberList = ['00000000000', '1111111111', '2222222222'];
    let mailList = ['Pitte@mail.com', 'Kop@mail.com', 'Hond@mail.com'];
    let cp: ContactPerson;

    for (let i = 0; i < this.listLength; i++) {
      cp = new ContactPerson(ownerNameList[i], ownerLastList[i], mailList[i], cellNumberList[i]);
      this.ownersList.push(cp);
    }
  }

  private generateMockContactPerson() {
    let ownerNameList = ['Tik', 'Monster', 'Hond'];
    let ownerLastList = ['Kos', 'Baar', 'drie'];
    let cellNumberList = ['00000000020', '11899111111', '2222222222'];
    let mailList = ['Tik@mail.com', 'Monster@mail.com', 'Hond@mail.com'];
    let cp: ContactPerson;

    for (let i = 0; i < this.listLength; i++) {
      cp = new ContactPerson(ownerNameList[i], ownerLastList[i], mailList[i], cellNumberList[i]);
      this.contactPersonList.push(cp);
    }
  }

  private generateMockAddress(){
    let streetList = ['okawe', 'masekind', 'isja'];
    let cityList = ['Kapse', 'Jozi', 'Durbs'];
    let provinceList = ['Western Cape', 'Guatenng a leng', 'Land of the Zulus'];
    let postalCodeList = ['7983', '2357','0000']
    let address: Address;

    for (let i = 0; i < this.listLength; i++) {
        address = new Address(streetList[i],cityList[i], provinceList[i], 'South Africa', postalCodeList[i]);
        this.addressList.push(address);
    }
  }

  generateMockCompanies() {
    let cNameList = ['Mugg And Bean', 'Addidas', 'Nestle'];
    let staffCount = [40, 23, 100]
    let vatNumberList = [1234678, 12345679, 1234677];
    let industryList = ["Food", "Automotive", "Banking"];
    let productionList = ["Discrete Mnufacturing", "Repetitive Manufacturing", "3D Printing"];
    let businessTypeList = ["Private", "Public", "Non-Profit Organisation"];
    let company: Company;
    this.generateMockContactPerson();
    this.generateMockOwners();
    this.generateMockAddress()

    for (let i = 0; i < this.listLength; i++) {
      company = new Company(i, cNameList[i], vatNumberList[i], staffCount[i], this.ownersList[i],
        this.contactPersonList[i], this.addressList[i], this.addressList[i], industryList[i],
        businessTypeList[i], productionList[i]);
      this.companyList.push(company)
    }
  }

  saveCompany(newCompany: Company){
    newCompany.id = this.companyList.length;
    this.companyList.push(newCompany)
  }

  updateCompany(updatedCompany: Company){
    console.log(updatedCompany.id)
    let index = updatedCompany.id;
    this.companyList[index] = updatedCompany;
  }
}
