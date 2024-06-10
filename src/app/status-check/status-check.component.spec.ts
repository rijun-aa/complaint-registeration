import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCheckComponent } from './status-check.component';

describe('StatusCheckComponent', () => {
  let component: StatusCheckComponent;
  let fixture: ComponentFixture<StatusCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
