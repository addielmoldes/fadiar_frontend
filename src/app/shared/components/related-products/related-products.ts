import {Component, computed, inject} from '@angular/core';
import {Product} from '@shared/components/product/product';
import {ProductService} from '@shared/services/product/product-service';

@Component({
  selector: 'app-related-products',
  imports: [
    Product,
  ],
  templateUrl: './related-products.html',
  styleUrl: './related-products.css',
})
export class RelatedProducts {
  private readonly productService = inject(ProductService)
  protected readonly relatedProducts = computed(
    () => this.productService.bestSellers()
  );
}
