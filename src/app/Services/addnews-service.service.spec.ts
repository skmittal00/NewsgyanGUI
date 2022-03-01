import { TestBed, inject } from '@angular/core/testing';

import { AddnewsServiceService } from './addnews-service.service';

describe('AddnewsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddnewsServiceService]
    });
  });

  it('should be created', inject([AddnewsServiceService], (service: AddnewsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
