import { Component, OnInit } from '@angular/core';
import {Forms} from "../../../../interfaces";

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, Forms {

  newForm: boolean;
  editable: boolean;
  saveable: boolean;

  constructor() {
    this.newForm = this.editable = this.saveable = true;
  }

  ngOnInit(): void {

  }

  populateForm(): void {
  }

  setupForm(): void {
  }

  onEditClicked() {
    this.editable = !this.editable;
    this.saveable = !this.saveable;
    alert('Still under construction')

  }

  onSaveClicked() {
    alert('Still under construction')
    this.onEditClicked();
  }
}
