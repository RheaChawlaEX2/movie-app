import { TestBed } from '@angular/core/testing';

import { NewMovieService } from './new-movie.service';

describe('NewMovieService', () => {
  let service: NewMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
