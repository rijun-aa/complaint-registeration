import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStatusCheckComponent } from './customer-status-check.component';

describe('CustomerStatusCheckComponent', () => {
  let component: CustomerStatusCheckComponent;
  let fixture: ComponentFixture<CustomerStatusCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerStatusCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerStatusCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
