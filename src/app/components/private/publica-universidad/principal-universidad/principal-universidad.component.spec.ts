import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalUniversidadComponent } from './principal-universidad.component';

describe('PrincipalUniversidadComponent', () => {
  let component: PrincipalUniversidadComponent;
  let fixture: ComponentFixture<PrincipalUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalUniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
