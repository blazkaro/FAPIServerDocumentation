import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecessaryServicesComponent } from './necessary-services.component';

describe('NecessaryServicesComponent', () => {
  let component: NecessaryServicesComponent;
  let fixture: ComponentFixture<NecessaryServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NecessaryServicesComponent]
    });
    fixture = TestBed.createComponent(NecessaryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
