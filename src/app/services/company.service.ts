import {Injectable} from "@angular/core";
import {Company} from "../models/company.model";
import {ContactPerson} from "../models/contactPerson.model";

@Injectable()
export class CompanyService{

  selectedCompany?: Company;
  companyList: Array<Company> = [];
  private ownersList: Array<ContactPerson> = [];
  private contactPersonList: Array<ContactPerson> = [];

  setSelectedCompany(company: Company){
    this.selectedCompany = company;
    console.log(this.selectedCompany);
  }

  private generateMockOwners(){
    let ownerNameList = ['Pitte', 'Kop', 'Hond'];
    let ownerLastList = ['een', 'twee', 'drie'];
    let cellNumberList = ['00000000000', '1111111111', '2222222222'];
    let mailList = ['Pitte@mail.com', 'Kop@mail.com', 'Hond@mail.com'];
    let cp: ContactPerson;

    for (let i = 0; i < this.companyList.length; i++) {
      cp = new ContactPerson(ownerNameList[i], ownerLastList[i], mailList[i], cellNumberList[i]);
     this.ownersList.push(cp);
    }
  }

  private generateMockContactPerson(){
    let ownerNameList = ['Tik', 'Monster', 'Hond'];
    let ownerLastList = ['Kos', 'Baar', 'drie'];
    let cellNumberList = ['00000000020', '11899111111', '2222222222'];
    let mailList = ['Tik@mail.com', 'Monster@mail.com', 'Hond@mail.com'];
    let cp: ContactPerson;

    for (let i = 0; i < this.companyList.length; i++) {
      cp = new ContactPerson(ownerNameList[i], ownerLastList[i], mailList[i], cellNumberList[i]);
      this.contactPersonList.push(cp);
    }
  }

  generateMockCompanies(){
    let cNameList = ['Mugg And Bean', 'Addidas', 'Nestle'];
    let staffCount = [40, 23, 100]
    let vatNumberList = [1234678,12345679,1234677];
    let industryList = ["Food", "Automotive", "Banking"];
    let productionList = ["Discrete Mnufacturing", "Repetitive Manufacturing", "3D Printing"];
    let businessTypeList = ["Private", "Public", "Non-Profit Organisation"];
    let company: Company;
    this.generateMockContactPerson();
    this.generateMockOwners();

    for (let i = 0; i < cNameList.length; i++) {
      company = new Company(cNameList[i], vatNumberList[i], staffCount[i], this.ownersList[i],
        this.contactPersonList[i],null, null,industryList[i], businessTypeList[i],
        productionList[i] );
      this.companyList.push(company)
    }
  }
}
