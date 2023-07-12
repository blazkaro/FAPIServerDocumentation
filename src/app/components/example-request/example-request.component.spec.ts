import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRequestComponent } from './example-request.component';

describe('ExampleRequestComponent', () => {
  let component: ExampleRequestComponent;
  let fixture: ComponentFixture<ExampleRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleRequestComponent]
    });
    fixture = TestBed.createComponent(ExampleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
