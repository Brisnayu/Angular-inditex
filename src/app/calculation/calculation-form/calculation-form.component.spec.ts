import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationFormComponent } from './calculation-form.component';

describe('CalculationFormComponent', () => {
  let component: CalculationFormComponent;
  let fixture: ComponentFixture<CalculationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
