import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintRegisterComponent } from './complaint-register.component';

describe('ComplaintRegisterComponent', () => {
  let component: ComplaintRegisterComponent;
  let fixture: ComponentFixture<ComplaintRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
