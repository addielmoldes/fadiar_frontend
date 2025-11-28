import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentData } from './payment-data';

describe('PaymentData', () => {
  let component: PaymentData;
  let fixture: ComponentFixture<PaymentData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
