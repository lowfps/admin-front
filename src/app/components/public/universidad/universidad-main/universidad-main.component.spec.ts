import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadMainComponent } from './universidad-main.component';

describe('UniversidadMainComponent', () => {
  let component: UniversidadMainComponent;
  let fixture: ComponentFixture<UniversidadMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
