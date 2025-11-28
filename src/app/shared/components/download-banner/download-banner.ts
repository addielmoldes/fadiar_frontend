import { Component } from '@angular/core';
import {Download, LucideAngularModule} from 'lucide-angular';
import {NgOptimizedImage} from '@angular/common';
import {ZardButtonComponent} from '@shared/zard/components/button/button.component';

@Component({
  selector: 'app-download-banner',
  imports: [
    LucideAngularModule,
    NgOptimizedImage,
    ZardButtonComponent
  ],
  templateUrl: './download-banner.html',
  styleUrl: './download-banner.css',
})
export class DownloadBanner {

  protected readonly Download = Download;
}
