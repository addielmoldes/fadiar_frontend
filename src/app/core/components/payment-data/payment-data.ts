import {Component, computed, inject, output} from '@angular/core';
import {PurchaseStepper} from '@shared/components/purchase-stepper/purchase-stepper';
import {ZardButtonComponent} from '@shared/zard/components/button/button.component';
import {ShoppingCartProduct} from '@shared/components/shopping-cart-product/shopping-cart-product';
import {ProductService} from '@shared/services/product/product-service';

@Component({
  selector: 'app-payment-data',
  imports: [
    PurchaseStepper,
    ZardButtonComponent,
    ShoppingCartProduct
  ],
  templateUrl: './payment-data.html',
  styleUrl: './payment-data.css',
})
export class PaymentData {
  changeStep = output<number>();

  private readonly productService = inject(ProductService);
  protected products = computed(
    () => this.productService.bestSellers().slice(0, 2)
  );
}
