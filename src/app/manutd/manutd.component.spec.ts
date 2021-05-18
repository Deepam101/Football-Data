import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutdComponent } from './manutd.component';

describe('ManutdComponent', () => {
  let component: ManutdComponent;
  let fixture: ComponentFixture<ManutdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
