import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDataForm } from './payment-data-form';

describe('PaymentDataForm', () => {
  let component: PaymentDataForm;
  let fixture: ComponentFixture<PaymentDataForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentDataForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDataForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
