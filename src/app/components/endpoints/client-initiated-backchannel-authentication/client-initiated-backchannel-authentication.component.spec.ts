import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInitiatedBackchannelAuthenticationComponent } from './client-initiated-backchannel-authentication.component';

describe('ClientInitiatedBackchannelAuthenticationComponent', () => {
  let component: ClientInitiatedBackchannelAuthenticationComponent;
  let fixture: ComponentFixture<ClientInitiatedBackchannelAuthenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientInitiatedBackchannelAuthenticationComponent]
    });
    fixture = TestBed.createComponent(ClientInitiatedBackchannelAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
