import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataForm } from './user-data-form';

describe('UserDataForm', () => {
  let component: UserDataForm;
  let fixture: ComponentFixture<UserDataForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDataForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDataForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
