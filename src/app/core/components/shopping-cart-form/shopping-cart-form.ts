import {Component, computed, inject, output} from '@angular/core';
import {ZardButtonComponent} from "@shared/zard/components/button/button.component";
import {ZardCheckboxComponent} from "@shared/zard/components/checkbox/checkbox.component";
import {
  ZardFormControlComponent,
  ZardFormFieldComponent,
  ZardFormLabelComponent
} from "@shared/zard/components/form/form.component";
import {ZardInputDirective} from "@shared/zard/components/input/input.directive";
import {PurchaseStepper} from '@shared/components/purchase-stepper/purchase-stepper';
import {ProductService} from '@shared/services/product/product-service';
import {ShoppingCartProduct} from '@shared/components/shopping-cart-product/shopping-cart-product';

@Component({
  selector: 'app-shopping-cart-form',
  imports: [
    ZardButtonComponent,
    ZardCheckboxComponent,
    ZardFormControlComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardInputDirective,
    PurchaseStepper,
    ShoppingCartProduct
  ],
  templateUrl: './shopping-cart-form.html',
  styleUrl: './shopping-cart-form.css',
})
export class ShoppingCartForm {
  changeStep = output<number>();

  private readonly productService = inject(ProductService);
  protected products = computed(
    () => this.productService.bestSellers().slice(0, 2)
  );
}
