import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


import { TareaService } from './tarea.service';

describe('TareaService', () => {
  let service: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [TareaService]
    });
    service = TestBed.inject(TareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
