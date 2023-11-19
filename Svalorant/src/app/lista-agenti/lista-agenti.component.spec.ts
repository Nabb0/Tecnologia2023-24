import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgentiComponent } from './lista-agenti.component';

describe('ListaAgentiComponent', () => {
  let component: ListaAgentiComponent;
  let fixture: ComponentFixture<ListaAgentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAgentiComponent]
    });
    fixture = TestBed.createComponent(ListaAgentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
