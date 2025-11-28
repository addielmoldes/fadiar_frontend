import {Component, computed, inject, input, linkedSignal, signal} from '@angular/core';
import {Hero2} from '@shared/components/hero-2/hero-2';
import {LatestProducts} from '@shared/components/latest-products/latest-products';
import {LucideAngularModule, Minus, Plus, ShoppingCart} from 'lucide-angular';
import {ZardButtonComponent} from '@shared/zard/components/button/button.component';
import {ZardAccordionComponent} from '@shared/zard/components/accordion/accordion.component';
import {ZardAccordionItemComponent} from '@shared/zard/components/accordion/accordion-item.component';
import {RelatedProducts} from '@shared/components/related-products/related-products';
import {NgOptimizedImage} from '@angular/common';
import {ProductService} from '@shared/services/product/product-service';
import {API_URL} from '../../core/utils/tokens';

@Component({
  selector: 'app-product-details',
  imports: [
    Hero2,
    LatestProducts,
    LucideAngularModule,
    ZardButtonComponent,
    ZardAccordionComponent,
    ZardAccordionItemComponent,
    RelatedProducts,
    NgOptimizedImage,
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  protected readonly id = input.required<number>();
  private readonly productService = inject(ProductService);
  protected readonly apiUrl = inject(API_URL);

  protected readonly product = computed(
    () => this.productService.products().find(product => product.id == Number(this.id()))!
  );

  protected selectedImage = linkedSignal(
    () => signal('')()
  );

  protected readonly ShoppingCart = ShoppingCart;
  protected readonly Minus = Minus;
  protected readonly Plus = Plus;
  protected readonly Object = Object;

  updateSelectedImage(imageUrl: string) {
    this.selectedImage.set(imageUrl);
  }
}
