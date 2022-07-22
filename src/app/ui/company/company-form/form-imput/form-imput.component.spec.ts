import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImputComponent } from './form-imput.component';

describe('FormImputComponent', () => {
  let component: FormImputComponent;
  let fixture: ComponentFixture<FormImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormImputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
