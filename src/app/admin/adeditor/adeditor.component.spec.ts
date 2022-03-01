import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeditorComponent } from './adeditor.component';

describe('AdeditorComponent', () => {
  let component: AdeditorComponent;
  let fixture: ComponentFixture<AdeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
