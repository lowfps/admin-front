import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadEditarComponent } from './universidad-editar.component';

describe('UniversidadEditarComponent', () => {
  let component: UniversidadEditarComponent;
  let fixture: ComponentFixture<UniversidadEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
