import {EventEmitter, Injectable} from "@angular/core";
import {Company} from "../models/company.model";
import {ContactPerson} from "../models/contactPerson.model";
import {Address} from "../models/address.model";
import {Frequency} from "../models/frequency.model";
import {Supplier} from "../models/supplier.model";
import {Product} from "../models/product.model";

@Injectable()
export class CompanyService {

  private selectedCompany?: Company;
  private listLength: number = 10;
  private ownersList: Array<ContactPerson> = [];
  private contactPersonList: Array<ContactPerson> = [];
  private addressList: Array<Address> = [];
  companyList: Array<Company> = [];
  supplierList: Array<Supplier> = [];
  productList: Array<Product> = [];
  companySelected = new EventEmitter<Company>();

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

    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < ownerLastList.length; i++) {
        cp = new ContactPerson(ownerNameList[i], ownerLastList[i], mailList[i], cellNumberList[i]);
        this.ownersList.push(cp);
      }
    }
  }

  private generateMockContactPerson() {
    let ownerNameList = ['Tik', 'Monster', 'Hond'];
    let ownerLastList = ['Kos', 'Baar', 'drie'];
    let cellNumberList = ['00000000020', '11899111111', '2222222222'];
    let mailList = ['Tik@mail.com', 'Monster@mail.com', 'Hond@mail.com'];
    let cp: ContactPerson;

    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < ownerNameList.length; i++) {
        cp = new ContactPerson(ownerNameList[i], ownerLastList[i], mailList[i], cellNumberList[i]);
        this.contactPersonList.push(cp);
      }
    }
  }

  private generateMockAddress() {
    let streetList = ['okawe', 'masekind', 'isja'];
    let cityList = ['Kapse', 'Jozi', 'Durbs'];
    let provinceList = ['Western Cape', 'Guatenng a leng', 'Land of the Zulus'];
    let postalCodeList = ['7983', '2357', '0000']
    let address: Address;

    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < streetList.length; i++) {
        address = new Address(streetList[i], cityList[i], provinceList[i], 'South Africa', postalCodeList[i]);
        this.addressList.push(address);
      }
    }
  }

  generateMockCompanies() {
    let cNameList = [
      'Mugg And Bean', 'Addidas', 'Nestle',
      'Company1', 'Company2', 'Company3',
      'Company4', 'Company5', 'Company6',
      'Company7'];
    let staffCount = [40, 23, 100, 40, 23, 100, 40, 23, 100, 40,]
    let vatNumberList = [
      1234678, 12345679, 1234677, 1234678, 12345679,
      1234677, 1234678, 12345679, 1234677, 1234678,];
    let industryList = [
      "Food", "Automotive", "Banking", "Food", "Automotive",
      "Banking", "Food", "Automotive", "Banking", "Food",];
    let productionList = [
      "Discrete Mnufacturing", "Repetitive Manufacturing", "3D Printing",
      "Discrete Mnufacturing", "Repetitive Manufacturing", "3D Printing",
      "Discrete Mnufacturing", "Repetitive Manufacturing", "3D Printing",
      "Discrete Mnufacturing",];
    let businessTypeList = [
      "Private", "Public", "Non-Profit Organisation",
      "Private", "Public", "Non-Profit Organisation",
      "Private", "Public", "Non-Profit Organisation",
      "Private",];
    let company: Company;
    this.generateMockContactPerson();
    this.generateMockOwners();
    this.generateMockAddress()
    this.generateMockSuppliers();

    for (let i = 0; i < this.listLength; i++) {
      company = new Company(i, cNameList[i], vatNumberList[i], staffCount[i], this.ownersList[i],
        this.contactPersonList[i], this.addressList[i], this.addressList[i], industryList[i],
        businessTypeList[i], productionList[i]);
      this.companyList.push(company)
    }
  }

  generateMockProducts() {
    let pName = ['Coffee Beans', 'Sugar', 'Milk'];
    let orderFrequency = [
      new Frequency(2, TimeFrame.WEEK),
      new Frequency(1, TimeFrame.WEEK),
      new Frequency(2, TimeFrame.WEEK),
    ];
    let leadTime = [
      new Frequency(1, TimeFrame.DAY),
      new Frequency(4, TimeFrame.DAY),
      new Frequency(3, TimeFrame.DAY),
    ];
    let units = [30, 50, 15];
    let product: Product;
    for (let i = 0; i < pName.length; i++) {
      product = new Product(pName[i], units[i], leadTime[i], orderFrequency[i]);
      this.productList.push(product);
    }
  }

  generateMockSuppliers() {
    let sName = ['StarBucks', 'Hullets', 'Parmolat'];
    this.generateMockProducts();
    let supplier: Supplier;
    for (let i = 0; i < sName.length; i++) {
      supplier = new Supplier(sName[i], this.productList, this.contactPersonList[i]);
      this.supplierList.push(supplier);
    }
  }

  saveCompany(newCompany: Company) {
    newCompany.id = this.companyList.length;
    this.companyList.push(newCompany)
  }

  updateCompany(updatedCompany: Company) {
    console.log(updatedCompany.id)
    let index = updatedCompany.id;
    this.companyList[index] = updatedCompany;
  }
}
