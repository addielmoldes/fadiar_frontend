import {Component} from '@angular/core';
import {DownloadBanner} from '@shared/components/download-banner/download-banner';
import {LatestProducts} from '@shared/components/latest-products/latest-products';
import {ZardAccordionComponent} from '@shared/zard/components/accordion/accordion.component';
import {ZardAccordionItemComponent} from '@shared/zard/components/accordion/accordion-item.component';
import {Hero3} from '@shared/components/hero-3/hero-3';

@Component({
  selector: 'app-faq',
  imports: [
    DownloadBanner,
    LatestProducts,
    ZardAccordionComponent,
    ZardAccordionItemComponent,
    Hero3
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  protected readonly faq = [
    {
      title: '¿Lorem ipsum dolor sit amet. Ut quaerat soluta?',
      answer: 'Lorem ipsum dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia. Lorem ipsum dolor sit amet. Ut quaerat soluta At dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia.'
    },
    {
      title: '¿Lorem ipsum dolor sit amet. Ut quaerat soluta?',
      answer: 'Lorem ipsum dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia. Lorem ipsum dolor sit amet. Ut quaerat soluta At dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia.'
    },
    {
      title: '¿Lorem ipsum dolor sit amet. Ut quaerat soluta?',
      answer: 'Lorem ipsum dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia. Lorem ipsum dolor sit amet. Ut quaerat soluta At dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia.'
    },
    {
      title: '¿Lorem ipsum dolor sit amet. Ut quaerat soluta?',
      answer: 'Lorem ipsum dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia. Lorem ipsum dolor sit amet. Ut quaerat soluta At dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia.'
    },
    {
      title: '¿Lorem ipsum dolor sit amet. Ut quaerat soluta?',
      answer: 'Lorem ipsum dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia. Lorem ipsum dolor sit amet. Ut quaerat soluta At dolores fugiat et voluptatum Quis eum voluptates quos ut beatae dolores et iste assumenda non beatae quis. Sed vero dolor sit libero ducimus et voluptatibus voluptates At ullam voluptates eos eligendi harum quo quia quidem ut dicta quia. Qui voluptas voluptas non sequi nihil et obcaecati quibusdam non odit quia.'
    },
  ]
}
