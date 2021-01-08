import { TestBed } from '@angular/core/testing';

import { DBFilesServiceService } from './dbfiles-service.service';

describe('DBFilesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBFilesServiceService = TestBed.get(DBFilesServiceService);
    expect(service).toBeTruthy();
  });
});
