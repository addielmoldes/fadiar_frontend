import {Component, input} from '@angular/core';
import {Check, DollarSign, LucideAngularModule, ShoppingCartIcon, Truck} from 'lucide-angular';

@Component({
  selector: 'app-purchase-stepper',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './purchase-stepper.html',
  styleUrl: './purchase-stepper.css',
})
export class PurchaseStepper {
  active = input.required<number>();
  protected readonly steps = [
    {
      name: 'Carrito de compra',
      icon: ShoppingCartIcon
    },
    {
      name: 'Datos de pago',
      icon: DollarSign
    },
    {
      name: 'Datos de entrega',
      icon: Truck
    },
    {
      name: 'Completar',
      icon: Check
    },
  ];
}
