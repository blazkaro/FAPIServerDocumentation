import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAuthenticationComponent } from './client-authentication.component';

describe('ClientAuthenticationComponent', () => {
  let component: ClientAuthenticationComponent;
  let fixture: ComponentFixture<ClientAuthenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAuthenticationComponent]
    });
    fixture = TestBed.createComponent(ClientAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
