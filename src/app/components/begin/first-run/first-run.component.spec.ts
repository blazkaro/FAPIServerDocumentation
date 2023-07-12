import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRunComponent } from './first-run.component';

describe('FirstRunComponent', () => {
  let component: FirstRunComponent;
  let fixture: ComponentFixture<FirstRunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstRunComponent]
    });
    fixture = TestBed.createComponent(FirstRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
