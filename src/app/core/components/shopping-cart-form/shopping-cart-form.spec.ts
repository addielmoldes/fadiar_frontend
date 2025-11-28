import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartForm } from './shopping-cart-form';

describe('ShoppingCartForm', () => {
  let component: ShoppingCartForm;
  let fixture: ComponentFixture<ShoppingCartForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
