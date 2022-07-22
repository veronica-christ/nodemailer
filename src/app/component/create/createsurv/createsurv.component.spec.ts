import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesurvComponent } from './createsurv.component';

describe('CreatesurvComponent', () => {
  let component: CreatesurvComponent;
  let fixture: ComponentFixture<CreatesurvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesurvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesurvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
