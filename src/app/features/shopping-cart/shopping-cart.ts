import {Component, signal} from '@angular/core';
import {DownloadBanner} from '@shared/components/download-banner/download-banner';
import {PaymentDataForm} from '../../core/components/payment-data-form/payment-data-form';
import {ShoppingCartForm} from '../../core/components/shopping-cart-form/shopping-cart-form';
import {DeliveryDataForm} from '../../core/components/delivery-data-form/delivery-data-form';
import {PaymentData} from '../../core/components/payment-data/payment-data';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    DownloadBanner,
    PaymentDataForm,
    ShoppingCartForm,
    DeliveryDataForm,
    PaymentData
  ],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  protected readonly activeStep = signal(0);

  changeStep(step: number) {
    this.activeStep.set(step);
  }
}
