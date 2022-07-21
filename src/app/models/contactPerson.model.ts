export class ContactPerson{
  firstname: string;
  lastname: string;
  email: string;
  cell: string;

  constructor(firstName: string, lastName: string, email: string, cell: string) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.email = email;
    this.cell = cell;
  }
}
