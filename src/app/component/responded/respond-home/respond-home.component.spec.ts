import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondHomeComponent } from './respond-home.component';

describe('RespondHomeComponent', () => {
  let component: RespondHomeComponent;
  let fixture: ComponentFixture<RespondHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
