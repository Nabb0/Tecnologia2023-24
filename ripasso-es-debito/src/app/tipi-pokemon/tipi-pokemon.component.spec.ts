import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipiPokemonComponent } from './tipi-pokemon.component';

describe('TipiPokemonComponent', () => {
  let component: TipiPokemonComponent;
  let fixture: ComponentFixture<TipiPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipiPokemonComponent]
    });
    fixture = TestBed.createComponent(TipiPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
