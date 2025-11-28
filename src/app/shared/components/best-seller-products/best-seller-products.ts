import {Component, computed, inject} from '@angular/core';
import {ZardCarouselComponent} from "@shared/zard/components/carousel/carousel.component";
import {ZardCarouselContentComponent} from "@shared/zard/components/carousel/carousel-content.component";
import {ZardCarouselItemComponent} from "@shared/zard/components/carousel/carousel-item.component";
import {Product} from '@shared/components/product/product';
import {ProductService} from '@shared/services/product/product-service';

@Component({
  selector: 'app-best-seller-products',
  imports: [
    ZardCarouselComponent,
    ZardCarouselContentComponent,
    ZardCarouselItemComponent,
    Product
  ],
  templateUrl: './best-seller-products.html',
  styleUrl: './best-seller-products.css',
})
export class BestSellerProducts {
  private productService = inject(ProductService);
  protected readonly bestSellerProducts = computed(
    () => this.productService.bestSellers()
  );
}
