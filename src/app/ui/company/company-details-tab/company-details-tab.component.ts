import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'company-details-tab',
  templateUrl: './company-details-tab.component.html',
  styleUrls: ['./company-details-tab.component.scss']
})
export class CompanyDetailsTabComponent implements OnInit {

  selectedIndex: number = 1;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

}
