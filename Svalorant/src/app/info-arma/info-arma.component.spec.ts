import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArmaComponent } from './info-arma.component';

describe('InfoArmaComponent', () => {
  let component: InfoArmaComponent;
  let fixture: ComponentFixture<InfoArmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoArmaComponent]
    });
    fixture = TestBed.createComponent(InfoArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
