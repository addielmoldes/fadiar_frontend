import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '@shared/interfaces/product';
import {ICurrency} from '@shared/interfaces/currency';
import {API_URL} from '../../../core/utils/tokens';

interface IProductsResponse {
  products: IProduct[];
  currencys: {
    currencys: ICurrency[];
    main: ICurrency;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = inject(API_URL);

  public bestSellers = signal<IProduct[]>([]);
  public products = signal<IProduct[]>([]);

  getBestSellers() {
    this.http.post<IProduct[]>(`${this.apiUrl}/img_mas_vendido`, {}).subscribe(
      (response: IProduct[]) => this.bestSellers.set(response)
    );
  }

  getProducts() {
    this.http.get<IProductsResponse>(`${this.apiUrl}/inventory_manager`).subscribe(
      (response: IProductsResponse) => this.products.set(response.products)
    );
  }
}
