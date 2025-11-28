import {Component, inject} from '@angular/core';
import {ZardMenuDirective} from '@shared/zard/components/menu/menu.directive';
import {LucideAngularModule, CircleUserRound, LogIn, LogOut, ShoppingBag} from 'lucide-angular';
import {ZardMenuContentDirective} from '@shared/zard/components/menu/menu-content.directive';
import {ZardMenuItemDirective} from '@shared/zard/components/menu/menu-item.directive';
import {RouterLink} from '@angular/router';
import {ZardDialogService} from '@shared/zard/components/dialog/dialog.service';
import {LoginForm} from '../../../core/components/login-form/login-form';
import {AuthService} from '../../../core/services/auth/auth-service';

@Component({
  selector: 'app-user-menu',
  imports: [
    ZardMenuDirective,
    LucideAngularModule,
    ZardMenuContentDirective,
    ZardMenuItemDirective,
    RouterLink,
  ],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css',
})
export class UserMenu {
  private readonly dialogService = inject(ZardDialogService);
  protected readonly isUserAuthenticated = inject(AuthService).isAuthenticated;
  protected readonly LogIn = LogIn;
  protected readonly LogOut = LogOut;
  protected readonly ShoppingBag = ShoppingBag;
  protected readonly CircleUserRound = CircleUserRound;

  login() {
    this.dialogService.create({
      zContent: LoginForm,
      zHideFooter: true,
      zClosable: false,
      zMaskClosable: true,
    });
  }
}
