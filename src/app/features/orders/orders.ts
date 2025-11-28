import { Component } from '@angular/core';
import {DownloadBanner} from '@shared/components/download-banner/download-banner';

@Component({
  selector: 'app-orders',
  imports: [
    DownloadBanner
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {

}
