import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadCrearComponent } from './universidad-crear.component';

describe('UniversidadCrearComponent', () => {
  let component: UniversidadCrearComponent;
  let fixture: ComponentFixture<UniversidadCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
