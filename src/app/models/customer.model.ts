import {Frequency} from "./frequency.model";
import {ContactPerson} from "./contactPerson.model";

export class Customer{
  name:string;
  product: string;
  averageQty: number;
  frequency: Frequency;
  contactPerson: ContactPerson;

  constructor(name: string, product: string, averageQty: number, frequency: Frequency, contactPerson: ContactPerson) {
    this.name = name;
    this.product = product;
    this.averageQty = averageQty;
    this.frequency = frequency;
    this.contactPerson = contactPerson;
  }
}
