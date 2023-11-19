import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArmiComponent } from './lista-armi.component';

describe('ListaArmiComponent', () => {
  let component: ListaArmiComponent;
  let fixture: ComponentFixture<ListaArmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaArmiComponent]
    });
    fixture = TestBed.createComponent(ListaArmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
