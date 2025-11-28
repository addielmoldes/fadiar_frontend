import { Component } from '@angular/core';
import {DownloadBanner} from '@shared/components/download-banner/download-banner';

@Component({
  selector: 'app-contact',
  imports: [
    DownloadBanner
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
