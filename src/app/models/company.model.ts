import {ContactPerson} from "./contactPerson.model";
import {Address} from "./address.model";

export class Company{
  id: number;
  name: string;
  vatNumber: number;
  staffCount: number
  owner: ContactPerson;
  contactPerson: ContactPerson;
  physicalAddress: Address;
  postalAddress: Address;
  industry: string;
  businessType: string;
  production: string;

  constructor(id: number,name: string, vatNumber: number, staffCount: number, owner: ContactPerson, contactPerson: ContactPerson, physicalAddress: any, postalAddress: any, industry: string, businessType: string, production: string) {
    this.id = id;
    this.name = name;
    this.vatNumber = vatNumber;
    this.staffCount = staffCount;
    this.owner = owner;
    this.contactPerson = contactPerson;
    this.physicalAddress = physicalAddress;
    this.postalAddress = postalAddress;
    this.industry = industry;
    this.businessType = businessType;
    this.production = production;
  }
}
