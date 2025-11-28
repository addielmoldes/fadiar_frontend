import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerProducts } from './best-seller-products';

describe('BestSellerProducts', () => {
  let component: BestSellerProducts;
  let fixture: ComponentFixture<BestSellerProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellerProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellerProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
