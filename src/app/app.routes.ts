import {Routes} from '@angular/router';
import {Home} from './core/home/home';
import {authGuard} from './core/guards/auth-guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products')
      .then(c => c.Products)
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./features/product-details/product-details')
      .then(c => c.ProductDetails)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about')
      .then(c => c.About)
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/faq/faq')
      .then(c => c.Faq)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact')
      .then(c => c.Contact)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./features/user-profile/user-profile')
      .then(c => c.UserProfile)
  },
  {
    path: 'shopping-cart',
    canActivate: [authGuard],
    loadComponent: () => import('./features/shopping-cart/shopping-cart')
      .then(c => c.ShoppingCart)
  },
  {
    path: 'orders',
    canActivate: [authGuard],
    loadComponent: () => import('./features/orders/orders')
      .then(c => c.Orders)
  }
];
