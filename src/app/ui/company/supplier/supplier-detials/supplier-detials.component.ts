import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'supplier-detials',
  templateUrl: './supplier-detials.component.html',
  styleUrls: ['./supplier-detials.component.scss']
})
export class SupplierDetialsComponent implements OnInit {

  cardList: Array<{title: string, cols: number, rows: number}>;
  rowHeight!: string;

  constructor() {
    this.cardList = [];
  }

  ngOnInit(): void {

    this.cardList = [
      {title: 'Supplier', cols: 1, rows: 2},
      {title: 'Product', cols: 1, rows: 2},
      {title: 'Product List', cols: 2, rows: 2},
    ];

    this.rowHeight = `${((window.innerHeight - 64 - 16 ) / 4)}px`;
    console.log(this.rowHeight)
  }
}
