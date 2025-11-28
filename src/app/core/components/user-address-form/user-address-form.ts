import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserSubmitButton} from "@shared/components/user-submit-button/user-submit-button";
import {
  ZardFormControlComponent,
  ZardFormFieldComponent,
  ZardFormLabelComponent, ZardFormMessageComponent
} from "@shared/zard/components/form/form.component";
import {ZardInputDirective} from "@shared/zard/components/input/input.directive";
import {AuthService} from '../../services/auth/auth-service';

@Component({
  selector: 'app-user-address-form',
  imports: [
    ReactiveFormsModule,
    UserSubmitButton,
    ZardFormControlComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormMessageComponent,
    ZardInputDirective
  ],
  templateUrl: './user-address-form.html',
  styleUrl: './user-address-form.css',
})
export class UserAddressForm implements OnInit {
  private readonly currentUser = inject(AuthService).currentUser;
  protected userAddressForm!: FormGroup;

  ngOnInit() {
    this.userAddressForm = new FormGroup({
      address: new FormControl<string>('', [Validators.required]),
    });

    if (this.currentUser()) {
      this.userAddressForm.setValue({
        address: this.currentUser()!.person.address,
      });
    }
  }

  submit() {
  }

  get address() {
    return this.userAddressForm.get('address')!;
  }
}
