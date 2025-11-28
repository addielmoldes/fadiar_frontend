import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadBanner } from './download-banner';

describe('DownloadBanner', () => {
  let component: DownloadBanner;
  let fixture: ComponentFixture<DownloadBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
