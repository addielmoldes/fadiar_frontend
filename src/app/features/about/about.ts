import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {LucideAngularModule, Download} from 'lucide-angular';
import {DownloadBanner} from '@shared/components/download-banner/download-banner';
import {LatestProducts} from '@shared/components/latest-products/latest-products';
import {Hero2} from '@shared/components/hero-2/hero-2';

@Component({
  selector: 'app-about',
  imports: [
    NgOptimizedImage,
    LucideAngularModule,
    DownloadBanner,
    LatestProducts,
    Hero2
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly cardInfo = [
    {
      title: '18.6k',
      description: 'Lorem ipsum Sit amet consectetur.  vel sit id at.'
    },
    {
      title: '98%',
      description: 'Lorem ipsum Sit amet consectetur. At tristique est adipiscing pellentesque vel sit id at.'
    },
    {
      title: '234+',
      description: 'Lorem ipsum Sit amet consectetur. At tristique est adipiscing pellentesque vel sit id at.'
    },
    {
      title: '63,6k',
      description: 'Lorem ipsum Sit amet consectetur. At pellentesque vel sit id at.'
    }
  ]
}
