import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantRevocationComponent } from './grant-revocation.component';

describe('GrantRevocationComponent', () => {
  let component: GrantRevocationComponent;
  let fixture: ComponentFixture<GrantRevocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrantRevocationComponent]
    });
    fixture = TestBed.createComponent(GrantRevocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
