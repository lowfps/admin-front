import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteMainComponent } from './docente-main.component';

describe('DocenteMainComponent', () => {
  let component: DocenteMainComponent;
  let fixture: ComponentFixture<DocenteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
