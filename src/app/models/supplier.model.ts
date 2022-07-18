import {Product} from "./product.model";
import {ContactPerson} from "./contactPerson.model";
import {Frequency} from "./frequency.model";

export class Supplier{
  name: string;
  products: Array<Product>;
  contactPerson: ContactPerson;

  constructor(name: string, products: Array<Product>, contactPerson: ContactPerson) {
    this.name = name;
    this.products = products;
    this.contactPerson = contactPerson;
  }
}
