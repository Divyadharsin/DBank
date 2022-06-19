import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NRIComponent } from './nri.component';

describe('NRIComponent', () => {
  let component: NRIComponent;
  let fixture: ComponentFixture<NRIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NRIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NRIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
