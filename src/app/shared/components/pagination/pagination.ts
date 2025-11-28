import {Component, signal} from '@angular/core';
import {
  ZardPaginationButtonComponent,
  ZardPaginationContentComponent,
  ZardPaginationItemComponent, ZardPaginationNextComponent, ZardPaginationPreviousComponent
} from '@shared/zard/components/pagination/pagination.component';

@Component({
  selector: 'app-pagination',
  imports: [
    ZardPaginationContentComponent,
    ZardPaginationItemComponent,
    ZardPaginationPreviousComponent,
    ZardPaginationNextComponent,
    ZardPaginationButtonComponent,
  ],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  readonly totalPages = 5;
  readonly currentPage = signal(3);

  readonly pages = signal<number[]>(Array.from({length: this.totalPages}, (_, i) => i + 1));

  goToPage(page: number) {
    this.currentPage.set(page);
  }

  goToPrevious() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  goToNext() {
    if (this.currentPage() < this.totalPages) {
      this.currentPage.update(p => p + 1);
    }
  }
}
