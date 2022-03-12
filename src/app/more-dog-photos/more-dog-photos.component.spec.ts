import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDogPhotosComponent } from './more-dog-photos.component';

describe('MoreDogPhotosComponent', () => {
  let component: MoreDogPhotosComponent;
  let fixture: ComponentFixture<MoreDogPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreDogPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDogPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
