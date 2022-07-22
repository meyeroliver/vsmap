import {Component, Input, OnInit} from '@angular/core';
import {Forms} from "../../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'contact-details-card',
  templateUrl: './contact-details-card.component.html',
  styleUrls: ['./contact-details-card.component.scss']
})
export class ContactDetailsCardComponent implements OnInit, Forms{

  @Input() title?: string;
  @Input() firstname?: string;
  @Input() lastname?: string;
  @Input() email?: string;
  @Input() cell?: string;
  contactDetailsForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.setupForm();
    this.populateForm();
  }

  populateForm(): void {
    this.contactDetailsForm.patchValue({
        'firstname': this.firstname,
        'lastname': this.lastname,
        'email': this.email,
        'cell': this.cell,
      }
    )
  }

  setupForm(): void {
    this.contactDetailsForm = new FormGroup<any>({
      'firstname': new FormControl({value: null, disabled: true}, Validators.required),
      'lastname': new FormControl({value: null, disabled: true}, Validators.required),
      'email': new FormControl({value: null, disabled: true}, [Validators.required, Validators.email]),
      'cell': new FormControl({value: null, disabled: true}, [Validators.required,]),
    });
  }

}
