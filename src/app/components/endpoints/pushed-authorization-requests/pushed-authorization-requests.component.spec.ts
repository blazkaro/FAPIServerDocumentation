import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushedAuthorizationRequestsComponent } from './pushed-authorization-requests.component';

describe('PushedAuthorizationRequestsComponent', () => {
  let component: PushedAuthorizationRequestsComponent;
  let fixture: ComponentFixture<PushedAuthorizationRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PushedAuthorizationRequestsComponent]
    });
    fixture = TestBed.createComponent(PushedAuthorizationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
