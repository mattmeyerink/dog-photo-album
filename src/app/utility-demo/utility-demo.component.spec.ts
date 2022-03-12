import { ComponentFixture, TestBed } from '@angular/core/testing';
import UtilityFunctions from 'src/utils';

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

  it('should call remove duplicates', () => {
    spyOn(UtilityFunctions, 'removeDuplicates');
    expect(UtilityFunctions.removeDuplicates).not.toHaveBeenCalled();
    component.demoRemoveDuplicates();
    expect(UtilityFunctions.removeDuplicates).toHaveBeenCalledTimes(1);
  });

  it('should call delay', () => {
    spyOn(UtilityFunctions, 'delay');
    expect(UtilityFunctions.delay).not.toHaveBeenCalled();
    component.demoDelay();
    expect(UtilityFunctions.delay).toHaveBeenCalledTimes(1);
  });

  it('should call animate right', () => {
    spyOn(UtilityFunctions, 'animateRight');
    expect(UtilityFunctions.animateRight).not.toHaveBeenCalled();
    component.demoAnimateRight();
    expect(UtilityFunctions.animateRight).toHaveBeenCalledTimes(1);
  });
});
