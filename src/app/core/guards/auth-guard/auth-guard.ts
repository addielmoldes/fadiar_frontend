import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth/auth-service';
import {ZardDialogService} from '@shared/zard/components/dialog/dialog.service';
import {LoginForm} from '../../components/login-form/login-form';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = inject(AuthService).isAuthenticated();
  const dialogService = inject(ZardDialogService);

  if (!isAuthenticated) {
    dialogService.create({
      zContent: LoginForm,
      zHideFooter: true,
      zClosable: false,
      zMaskClosable: true,
    });
  }

  return isAuthenticated;
};
