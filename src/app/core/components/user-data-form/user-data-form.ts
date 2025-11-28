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
  selector: 'app-user-data-form',
  imports: [
    ReactiveFormsModule,
    UserSubmitButton,
    ZardFormControlComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormMessageComponent,
    ZardInputDirective
  ],
  templateUrl: './user-data-form.html',
  styleUrl: './user-data-form.css',
})
export class UserDataForm implements OnInit {
  private readonly currentUser = inject(AuthService).currentUser;
  protected userDataForm!: FormGroup;

  ngOnInit() {
    this.userDataForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      phoneNumber: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
    });

    if (this.currentUser()) {
      this.userDataForm.setValue({
        name: this.currentUser()!.person.name,
        lastName: this.currentUser()!.person.lastname1,
        phoneNumber: this.currentUser()!.person.cellphone1,
        email: this.currentUser()!.user.email
      });
    }
  }

  submit() {
  }

  get name() {
    return this.userDataForm.get('name')!;
  }

  get lastName() {
    return this.userDataForm.get('lastName')!;
  }

  get phoneNumber() {
    return this.userDataForm.get('phoneNumber')!;
  }

  get email() {
    return this.userDataForm.get('email')!;
  }
}
