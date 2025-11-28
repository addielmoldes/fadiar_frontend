import {Component, inject, input} from '@angular/core';
import {ZardButtonComponent} from '@shared/zard/components/button/button.component';
import {NgOptimizedImage} from '@angular/common';
import {LucideAngularModule, ShoppingCart, Plus, Minus} from 'lucide-angular';
import {RouterLink} from '@angular/router';
import {IProduct} from '@shared/interfaces/product';
import {API_URL} from '../../../core/utils/tokens';

type ProductLayout = 'vertical' | 'horizontal';

@Component({
  selector: 'app-product',
  imports: [
    ZardButtonComponent,
    NgOptimizedImage,
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  public readonly product = input.required<IProduct>();
  public readonly layout = input<ProductLayout>('vertical');

  protected readonly apiUrl = inject(API_URL);
  protected readonly ShoppingCart = ShoppingCart;
  protected readonly Plus = Plus;
  protected readonly Minus = Minus;

  protected productAmount = 0;

  addProduct() {
    this.productAmount++;
  }

  subProduct() {
    this.productAmount--;
  }
}
