import {Component, inject, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ZardButtonComponent} from '@shared/zard/components/button/button.component';
import {LucideAngularModule, Trash2, Plus, Minus} from 'lucide-angular';
import {NgOptimizedImage} from '@angular/common';
import {IProduct} from '@shared/interfaces/product';
import {API_URL} from '../../../core/utils/tokens';

@Component({
  selector: 'app-shopping-cart-product',
  imports: [
    RouterLink,
    ZardButtonComponent,
    LucideAngularModule,
    NgOptimizedImage
  ],
  templateUrl: './shopping-cart-product.html',
  styleUrl: './shopping-cart-product.css',
})
export class ShoppingCartProduct {
  public readonly product = input.required<IProduct>();
  public readonly locked = input(false);

  protected readonly apiUrl = inject(API_URL);
  protected readonly Trash2 = Trash2;
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
