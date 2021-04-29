import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuUniversidadComponent } from './side-menu-universidad.component';

describe('SideMenuUniversidadComponent', () => {
  let component: SideMenuUniversidadComponent;
  let fixture: ComponentFixture<SideMenuUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuUniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
