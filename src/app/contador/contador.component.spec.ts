import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorComponent } from './contador.component';
import { DebugElement } from '@angular/core';

describe('ContadorComponent', () => {

  let componente: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContadorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorComponent);
    componente = fixture.componentInstance;
    fixture.autoDetectChanges();

    debugElement = fixture.debugElement;
    htmlElement = debugElement.nativeElement;

  });

  it('should be true', () => {
    expect(componente).toBeTruthy();
  });

  it('contador aumento en 1', () => {

    componente.sumar();
    fixture.autoDetectChanges();
    expect(htmlElement.textContent).toContain('1');
    expect(htmlElement.textContent).toContain('1');
    expect(htmlElement.textContent).toContain('1');

  });

});
