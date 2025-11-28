import {Component, inject, OnInit} from '@angular/core';
import {ZardButtonComponent} from '@shared/zard/components/button/button.component';
import {ZardIconComponent} from '@shared/zard/components/icon/icon.component';
import {Hero} from '../layout/hero/hero';
import {LatestProducts} from '@shared/components/latest-products/latest-products';
import {BestSellerProducts} from '@shared/components/best-seller-products/best-seller-products';
import {Hero3} from '@shared/components/hero-3/hero-3';
import {BentoGrid} from '@shared/components/bento-grid/bento-grid';
import {ProductService} from '@shared/services/product/product-service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    ZardButtonComponent,
    ZardIconComponent,
    Hero,
    LatestProducts,
    BestSellerProducts,
    Hero3,
    BentoGrid,
    NgOptimizedImage
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly productService = inject(ProductService);

  protected showBentoGrid = true;

  ngOnInit() {
    this.showBentoGrid = window.innerWidth > 1366;
    this.productService.getBestSellers();
  }
}
