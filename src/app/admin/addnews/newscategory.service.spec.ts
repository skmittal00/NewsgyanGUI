import { TestBed, inject } from '@angular/core/testing';

import { NewscategoryService } from './newscategory.service';

describe('NewscategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewscategoryService]
    });
  });

  it('should be created', inject([NewscategoryService], (service: NewscategoryService) => {
    expect(service).toBeTruthy();
  }));
});
