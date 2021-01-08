import { TestBed } from '@angular/core/testing';

import { CommandeserviceService } from './commandeservice.service';

describe('CommandeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandeserviceService = TestBed.get(CommandeserviceService);
    expect(service).toBeTruthy();
  });
});
