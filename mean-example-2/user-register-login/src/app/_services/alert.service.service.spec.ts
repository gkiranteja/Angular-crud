import { TestBed } from '@angular/core/testing';

import { Alert.ServiceService } from './alert.service.service';

describe('Alert.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Alert.ServiceService = TestBed.get(Alert.ServiceService);
    expect(service).toBeTruthy();
  });
});
