import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModelosComponent } from './lista-modelos.component';

describe('ListaModelosComponent', () => {
  let component: ListaModelosComponent;
  let fixture: ComponentFixture<ListaModelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaModelosComponent]
    });
    fixture = TestBed.createComponent(ListaModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
