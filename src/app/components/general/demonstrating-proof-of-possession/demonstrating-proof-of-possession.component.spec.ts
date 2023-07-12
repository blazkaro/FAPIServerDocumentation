import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstratingProofOfPossessionComponent } from './demonstrating-proof-of-possession.component';

describe('DemonstratingProofOfPossessionComponent', () => {
  let component: DemonstratingProofOfPossessionComponent;
  let fixture: ComponentFixture<DemonstratingProofOfPossessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemonstratingProofOfPossessionComponent]
    });
    fixture = TestBed.createComponent(DemonstratingProofOfPossessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
