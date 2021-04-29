import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteAdminComponent } from './docente-admin.component';

describe('DocenteAdminComponent', () => {
  let component: DocenteAdminComponent;
  let fixture: ComponentFixture<DocenteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
