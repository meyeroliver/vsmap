import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetialsComponent } from './supplier-detials.component';

describe('SupplierDetialsComponent', () => {
  let component: SupplierDetialsComponent;
  let fixture: ComponentFixture<SupplierDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
