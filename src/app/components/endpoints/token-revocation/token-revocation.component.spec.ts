import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenRevocationComponent } from './token-revocation.component';

describe('TokenRevocationComponent', () => {
  let component: TokenRevocationComponent;
  let fixture: ComponentFixture<TokenRevocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenRevocationComponent]
    });
    fixture = TestBed.createComponent(TokenRevocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
