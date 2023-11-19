import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAgenteComponent } from './info-agente.component';

describe('InfoAgenteComponent', () => {
  let component: InfoAgenteComponent;
  let fixture: ComponentFixture<InfoAgenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoAgenteComponent]
    });
    fixture = TestBed.createComponent(InfoAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
