import {Component, computed, inject} from '@angular/core';
import {Product} from "@shared/components/product/product";
import {ZardCarouselComponent} from '@shared/zard/components/carousel/carousel.component';
import {ZardCarouselContentComponent} from '@shared/zard/components/carousel/carousel-content.component';
import {ZardCarouselItemComponent} from '@shared/zard/components/carousel/carousel-item.component';
import {ProductService} from '@shared/services/product/product-service';

@Component({
  selector: 'app-latest-products',
  imports: [
    Product,
    ZardCarouselComponent,
    ZardCarouselContentComponent,
    ZardCarouselItemComponent
  ],
  templateUrl: './latest-products.html',
  styleUrl: './latest-products.css',
})
export class LatestProducts {
  private readonly productService = inject(ProductService);
  protected latestProducts = computed(
    () => this.productService.bestSellers()
  );
}
