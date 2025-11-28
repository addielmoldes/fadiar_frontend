import {Component, inject} from '@angular/core';
import {DownloadBanner} from '@shared/components/download-banner/download-banner';
import {NgOptimizedImage} from '@angular/common';
import {LucideAngularModule, RefreshCcw} from 'lucide-angular';
import {UserDataForm} from '../../core/components/user-data-form/user-data-form';
import {UserAddressForm} from '../../core/components/user-address-form/user-address-form';
import {UserPasswordForm} from '../../core/components/user-password-form/user-password-form';
import {AuthService} from '../../core/services/auth/auth-service';
import {API_URL} from '../../core/utils/tokens';

@Component({
  selector: 'app-user-profile',
  imports: [
    DownloadBanner,
    NgOptimizedImage,
    LucideAngularModule,
    UserDataForm,
    UserAddressForm,
    UserPasswordForm
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  protected userInfo = inject(AuthService).currentUser()!;
  protected readonly apiUrl = inject(API_URL);
  protected readonly RefreshCcw = RefreshCcw;
}
