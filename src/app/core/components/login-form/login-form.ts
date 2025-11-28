import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  ZardFormControlComponent,
  ZardFormFieldComponent,
  ZardFormMessageComponent
} from '@shared/zard/components/form/form.component';
import {ZardInputDirective} from '@shared/zard/components/input/input.directive';
import {ZardButtonComponent} from '@shared/zard/components/button/button.component';
import {AuthService} from '../../services/auth/auth-service';

@Component({
  selector: 'app-login-form',
  imports: [
    ReactiveFormsModule,
    ZardFormFieldComponent,
    ZardFormControlComponent,
    ZardInputDirective,
    ZardButtonComponent,
    ZardFormMessageComponent
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm implements OnInit {
  private readonly authService = inject((AuthService));
  protected loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    })
  }

  submit() {
    this.authService.login(this.loginForm.value);
  }

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }
}
