import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PplfooterComponent } from './pplfooter.component';

describe('PplfooterComponent', () => {
  let component: PplfooterComponent;
  let fixture: ComponentFixture<PplfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PplfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PplfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
