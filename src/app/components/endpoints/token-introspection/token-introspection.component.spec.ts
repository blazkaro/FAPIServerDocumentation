import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenIntrospectionComponent } from './token-introspection.component';

describe('TokenIntrospectionComponent', () => {
  let component: TokenIntrospectionComponent;
  let fixture: ComponentFixture<TokenIntrospectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenIntrospectionComponent]
    });
    fixture = TestBed.createComponent(TokenIntrospectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
