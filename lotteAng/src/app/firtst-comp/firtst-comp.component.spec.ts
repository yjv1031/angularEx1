import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtstCompComponent } from './firtst-comp.component';

describe('FirtstCompComponent', () => {
  let component: FirtstCompComponent;
  let fixture: ComponentFixture<FirtstCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirtstCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
