import { TestBed } from '@angular/core/testing';

import { HttpConnectorsService } from './http-connectors.service';

describe('HttpConnectorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpConnectorsService = TestBed.get(HttpConnectorsService);
    expect(service).toBeTruthy();
  });
});
