import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewsimagesComponent } from './addnewsimages.component';

describe('AddnewsimagesComponent', () => {
  let component: AddnewsimagesComponent;
  let fixture: ComponentFixture<AddnewsimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewsimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewsimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
