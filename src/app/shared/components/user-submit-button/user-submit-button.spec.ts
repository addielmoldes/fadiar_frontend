import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmitButton } from './user-submit-button';

describe('UserSubmitButton', () => {
  let component: UserSubmitButton;
  let fixture: ComponentFixture<UserSubmitButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubmitButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubmitButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
