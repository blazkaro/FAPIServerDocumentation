import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichAuthorizationRequestsComponent } from './rich-authorization-requests.component';

describe('RichAuthorizationRequestsComponent', () => {
  let component: RichAuthorizationRequestsComponent;
  let fixture: ComponentFixture<RichAuthorizationRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RichAuthorizationRequestsComponent]
    });
    fixture = TestBed.createComponent(RichAuthorizationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
