import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PplheaderComponent } from './pplheader.component';

describe('PplheaderComponent', () => {
  let component: PplheaderComponent;
  let fixture: ComponentFixture<PplheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PplheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PplheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
