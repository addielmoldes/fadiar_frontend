import {Component, output} from '@angular/core';
import {PurchaseStepper} from '@shared/components/purchase-stepper/purchase-stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import {ZardButtonComponent} from '@shared/zard/components/button/button.component';
import {ZardFormControlComponent, ZardFormFieldComponent} from '@shared/zard/components/form/form.component';
import {ZardInputDirective} from '@shared/zard/components/input/input.directive';

@Component({
  selector: 'app-delivery-data-form',
  imports: [
    PurchaseStepper,
    ReactiveFormsModule,
    NgOptimizedImage,
    ZardButtonComponent,
    ZardFormControlComponent,
    ZardFormFieldComponent,
    ZardInputDirective
  ],
  templateUrl: './delivery-data-form.html',
  styleUrl: './delivery-data-form.css',
})
export class DeliveryDataForm {
  changeStep = output<number>();
}
