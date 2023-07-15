import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantQueryingComponent } from './grant-querying.component';

describe('GrantQueryingComponent', () => {
  let component: GrantQueryingComponent;
  let fixture: ComponentFixture<GrantQueryingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrantQueryingComponent]
    });
    fixture = TestBed.createComponent(GrantQueryingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
