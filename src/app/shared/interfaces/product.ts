import {ICurrency} from '@shared/interfaces/currency';

export interface IProduct {
  readonly id: number,
  readonly cantidad: number,
  readonly name: string,
  readonly img: string,
  readonly description: string,
  readonly model: string,
  readonly brand: string,
  readonly regret: boolean,
  readonly id_category: number,
  readonly id_product_size: number,
  readonly disabled: boolean,
  readonly pre_venta: boolean,
  readonly warranty: number,
  readonly price: number,
  readonly temporal_price: number | null,
  readonly commission: number,
  readonly id_currency: number,
  readonly currency: ICurrency,
  readonly count: number,
  readonly specs: ProductSpec[],
  readonly categoria: ProductCategory,
  readonly size: ProductSize
}

interface ProductSpec {
  readonly id: number,
  readonly name: string,
  readonly description: string,
}

interface ProductCategory {
  readonly id: number,
  readonly name: string,
  readonly id_padre: number | null;
}

interface ProductSize {
  readonly id: number,
  readonly size: string,
  readonly units: number,
  readonly mode: string,
  readonly price_increment: number;
  readonly delivery_commission: number;
  readonly id_commission_currency: number;
}
