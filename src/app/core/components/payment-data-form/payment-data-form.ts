import {Component, output} from '@angular/core';
import {PurchaseStepper} from "@shared/components/purchase-stepper/purchase-stepper";
import {
  ZardFormControlComponent,
  ZardFormFieldComponent,
  ZardFormLabelComponent,
} from '@shared/zard/components/form/form.component';
import {ZardRadioComponent} from '@shared/zard/components/radio/radio.component';
import {NgOptimizedImage} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ZardInputDirective} from '@shared/zard/components/input/input.directive';
import {ZardButtonComponent} from '@shared/zard/components/button/button.component';

@Component({
  selector: 'app-payment-data-form',
  imports: [
    PurchaseStepper,
    ZardFormControlComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardRadioComponent,
    NgOptimizedImage,
    ReactiveFormsModule,
    ZardInputDirective,
    ZardButtonComponent
  ],
  templateUrl: './payment-data-form.html',
  styleUrl: './payment-data-form.css',
})
export class PaymentDataForm {
  changeStep = output<number>();
}
