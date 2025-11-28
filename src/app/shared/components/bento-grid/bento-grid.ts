import {Component, computed, inject} from '@angular/core';
import {Product} from '@shared/components/product/product';
import {ProductService} from '@shared/services/product/product-service';

@Component({
  selector: 'app-bento-grid',
  imports: [
    Product
  ],
  templateUrl: './bento-grid.html',
  styleUrl: './bento-grid.css',
})
export class BentoGrid {
  private productService = inject(ProductService);
  protected readonly ourProducts = computed(
    () => this.productService.bestSellers()
  );

  protected readonly bentoSettings = [
    'h', 'v', 'h', 'v',
    'v', 'v', 'h',
    'h', 'h'
  ];
}
