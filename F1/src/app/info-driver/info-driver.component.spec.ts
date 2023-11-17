import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDriverComponent } from './info-driver.component';

describe('InfoDriverComponent', () => {
  let component: InfoDriverComponent;
  let fixture: ComponentFixture<InfoDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoDriverComponent]
    });
    fixture = TestBed.createComponent(InfoDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
