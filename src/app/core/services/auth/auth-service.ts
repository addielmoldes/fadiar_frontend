import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

interface LoginData {
  email: string;
  password: string;
}

interface ILoginResponse {
  data: {
    user_info: IUser
  };
}

interface IUser {
  person: {
    id: number;
    ci: string;
    name: string;
    lastname1: string;
    lastname2: string;
    cellphone1: string;
    cellphone2: string | null;
    address: string;
  },
  user: {
    id: number;
    username: string;
    img: string;
    email: string;
  },
  access_token: string;
  refresh_token: string;
}

interface RegisterData {
  name: string;
  lastname1: string;
  lastname2: string;
  type: 'Cliente';
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  public currentUser = signal<IUser | null>(null);
  public isAuthenticated = computed(
    () => !!this.currentUser()
  );

  constructor() {
    if (sessionStorage.getItem('user_info')) {
      this.currentUser.set(JSON.parse(sessionStorage.getItem('user_info')!));
    }
  }

  login(data: LoginData) {
    this.http.post<ILoginResponse>(`${this.apiUrl}/login`, data).subscribe(
      (response: ILoginResponse) => {
        sessionStorage.setItem('access_token', response.data.user_info.access_token);
        sessionStorage.setItem('user_info', JSON.stringify(response.data.user_info));
        this.currentUser.set(response.data.user_info);
      }
    );
  }

  register(data: RegisterData) {
    this.http.post(`${this.apiUrl}/register`, data);
  }

  refreshToken() {
    const data = {};
    this.http.post(`${this.apiUrl}/refresh-token`, data);
  }

  emailVerification() {
    const data = {};
    this.http.post(`${this.apiUrl}/email_verification`, data);
  }

  resendEmailVerification() {
    const data = {};
    this.http.post(`${this.apiUrl}/resend_verification_email`, data);
  }
}
