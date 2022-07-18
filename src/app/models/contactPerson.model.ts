export class ContactPerson{
  firstName: string;
  lastName: string;
  email: string;
  cell: string;

  constructor(firstName: string, lastName: string, email: string, cell: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.cell = cell;
  }
}
