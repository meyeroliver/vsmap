export class Address{
  street: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;


  constructor(street: string, city: string, province: string, country: string, postalCode: string) {
    this.street = street;
    this.city = city;
    this.province = province;
    this.country = country;
    this.postalCode = postalCode;
  }
}

