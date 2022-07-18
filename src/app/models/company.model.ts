import {ContactPerson} from "./contactPerson.model";

export class Company{
  name: string;
  vatNumber: number;
  staffCount: number
  owner: ContactPerson;
  contactPerson: ContactPerson;
  industry: string;
  businessType: string;
  production: string;

  constructor(name: string, vatNumber: number, staffCount: number, owner: ContactPerson, contactPerson: ContactPerson, industry: string, businessType: string, production: string) {
    this.name = name;
    this.vatNumber = vatNumber;
    this.staffCount = staffCount;
    this.owner = owner;
    this.contactPerson = contactPerson;
    this.industry = industry;
    this.businessType = businessType;
    this.production = production;
  }
}
