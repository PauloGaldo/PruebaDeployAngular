import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {

  let service: DataService;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(() => {

    const spy = jasmine.createSpyObj('DataService', ['getSaludo', 'getUsuario']);

    TestBed.configureTestingModule({
      providers: [{ provide: DataService, useValue: spy }]
    });

    service = TestBed.get(DataService);
    dataServiceSpy = TestBed.get(DataService);

  });

  it('should be created', inject([DataService], (service: DataService) => {

    expect(service).toBeTruthy();

  }));


  it('Servicio regresa datos', () => {

    const stubData = 'hola a todos!';

    dataServiceSpy.getSaludo.and.returnValue(stubData);

    expect(dataServiceSpy.getSaludo()).toEqual(stubData);

  });

  it('Servicio regresa usuario', () => {

    console.log("debug");
    const stubData = { id: 4, nombre: 'paulo' };

    dataServiceSpy.getUsuario.and.returnValue(stubData);

    expect(dataServiceSpy.getUsuario()).toEqual(stubData);

  })


});
