import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartProduct } from './shopping-cart-product';

describe('ShoppingCartProduct', () => {
  let component: ShoppingCartProduct;
  let fixture: ComponentFixture<ShoppingCartProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
