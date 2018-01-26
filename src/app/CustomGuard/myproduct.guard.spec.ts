import { TestBed, async, inject } from '@angular/core/testing';

import { MyproductGuard } from './myproduct.guard';

describe('MyproductGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyproductGuard]
    });
  });

  it('should ...', inject([MyproductGuard], (guard: MyproductGuard) => {
    expect(guard).toBeTruthy();
  }));
});
