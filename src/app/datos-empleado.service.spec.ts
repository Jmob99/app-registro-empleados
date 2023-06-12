import { TestBed } from '@angular/core/testing';

import { DatosEmpleadoService } from './datos-empleado.service';

describe('DatosEmpleadoService', () => {
  let service: DatosEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
