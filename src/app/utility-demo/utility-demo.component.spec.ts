import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityDemoComponent } from './utility-demo.component';

describe('UtilityDemoComponent', () => {
  let component: UtilityDemoComponent;
  let fixture: ComponentFixture<UtilityDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
