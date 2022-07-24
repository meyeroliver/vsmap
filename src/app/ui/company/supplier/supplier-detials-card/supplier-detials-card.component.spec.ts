import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetialsCardComponent } from './supplier-detials-card.component';

describe('SupplierDetialsCardComponent', () => {
  let component: SupplierDetialsCardComponent;
  let fixture: ComponentFixture<SupplierDetialsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDetialsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierDetialsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
