import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { UserRequestService } from './user-request.service.service';

describe('UserRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: UserRequestService = TestBed.get(UserRequestService);
    expect(service).toBeTruthy();
  });
});
