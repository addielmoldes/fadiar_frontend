import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserSubmitButton} from '@shared/components/user-submit-button/user-submit-button';
import {
  ZardFormControlComponent,
  ZardFormFieldComponent,
  ZardFormLabelComponent, ZardFormMessageComponent
} from '@shared/zard/components/form/form.component';
import {ZardInputDirective} from '@shared/zard/components/input/input.directive';

@Component({
  selector: 'app-user-password-form',
  imports: [
    ReactiveFormsModule,
    UserSubmitButton,
    ZardFormControlComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormMessageComponent,
    ZardInputDirective
  ],
  templateUrl: './user-password-form.html',
  styleUrl: './user-password-form.css',
})
export class UserPasswordForm implements OnInit {
  protected userPasswordForm!: FormGroup;

  ngOnInit() {
    this.userPasswordForm = new FormGroup({
      currentPassword: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    });
  }

  submit() {}

  get currentPassword() {
    return this.userPasswordForm.get('currentPassword')!;
  }

  get password() {
    return this.userPasswordForm.get('password')!;
  }
}
