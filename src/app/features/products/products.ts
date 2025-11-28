import {Component, inject, OnInit, signal} from '@angular/core';
import {ZardAccordionComponent} from '@shared/zard/components/accordion/accordion.component';
import {ZardAccordionItemComponent} from '@shared/zard/components/accordion/accordion-item.component';
import {ZardCheckboxComponent} from '@shared/zard/components/checkbox/checkbox.component';
import {ZardRadioComponent} from '@shared/zard/components/radio/radio.component';
import {ZardSliderComponent} from '@shared/zard/components/slider/slider.component';
import {LatestProducts} from '@shared/components/latest-products/latest-products';
import {Hero} from '../../core/layout/hero/hero';
import {Product} from '@shared/components/product/product';
import {LucideAngularModule, Funnel} from 'lucide-angular';
import {Pagination} from '@shared/components/pagination/pagination';
import {Hero2} from '@shared/components/hero-2/hero-2';
import {ProductService} from '@shared/services/product/product-service';

@Component({
  selector: 'app-products',
  imports: [
    ZardAccordionComponent,
    ZardAccordionItemComponent,
    ZardCheckboxComponent,
    ZardRadioComponent,
    ZardSliderComponent,
    LatestProducts,
    Hero,
    Product,
    LucideAngularModule,
    Pagination,
    Hero2
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private readonly productService = inject(ProductService);

  protected readonly filterCategories = [
    'Refrigeradores y Neveras', 'Cocinas y Hornos', 'Muebles', 'Filtros y Repuestos', 'Lavadoras y Secadoras',
    'Ollas y tostadoras', 'Iluminación', 'Clima', 'Ventiladores', 'Generadores Eléctricos', 'Televisión y Audio',
    'Vajillas', 'Accesorios'
  ];
  protected readonly filterMakes = [
    'Eko', 'Eón', 'Midea', 'Desmatt', 'Led Drivert', 'Columbia', 'Ciclonet'
  ];

  protected readonly Funnel = Funnel;


  protected readonly array = Array.from({length: 9});
  protected readonly products = this.productService.products;
  readonly currentPage = signal(3);

  ngOnInit() {
    this.productService.getProducts();
  }

  goToPage(page: number) {
    this.currentPage.set(page);
  }

  goToPrevious() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  goToNext() {
    if (this.currentPage() < this.array.length) {
      this.currentPage.update(p => p + 1);
    }
  }
}
