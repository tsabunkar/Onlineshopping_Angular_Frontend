import { TestBed, inject } from '@angular/core/testing';

import { CustomProductService } from './custom-product.service';

describe('CustomProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomProductService]
    });
  });

  it('should be created', inject([CustomProductService], (service: CustomProductService) => {
    expect(service).toBeTruthy();
  }));
});
