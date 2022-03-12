import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully fetch the random dog image', waitForAsync(async () => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({ json: async () => ({ message: 'testURL', status: 'success' }) } as unknown as Response));
    component.dogImage = '';
    await component.fetchDogImage();
    expect(component.dogImage).toEqual('testURL');
  }));

  it('should handle errored dog image fetch', waitForAsync(async () => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({ json: async () => ({ message: 'errorURL', status: 'error' }) } as unknown as Response));
    component.dogImage = '';
    await component.fetchDogImage();
    expect(component.dogImage).toEqual('');
  }));
});
