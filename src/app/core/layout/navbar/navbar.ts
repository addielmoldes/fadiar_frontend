import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {ZardInputDirective} from '@shared/zard/components/input/input.directive';
import {LucideAngularModule, Search, ShoppingCart, Menu, X} from 'lucide-angular';
import {UserMenu} from '@shared/components/user-menu/user-menu';
import {navigationMenu} from '@shared/utils/navigation-menu';
import {ZardMenuContentDirective} from '@shared/zard/components/menu/menu-content.directive';
import {ZardMenuDirective} from '@shared/zard/components/menu/menu.directive';
import {ZardMenuItemDirective} from '@shared/zard/components/menu/menu-item.directive';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgOptimizedImage,
    ZardInputDirective,
    LucideAngularModule,
    RouterLinkActive,
    UserMenu,
    ZardMenuContentDirective,
    ZardMenuDirective,
    ZardMenuItemDirective,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly Search = Search;
  protected readonly X = X;
  protected readonly Menu = Menu;
  protected readonly ShoppingCart = ShoppingCart;
  protected readonly navigationMenu = navigationMenu;
}
