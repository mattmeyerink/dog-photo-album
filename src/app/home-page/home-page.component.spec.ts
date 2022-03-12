import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  const unmockedFetch = globalThis.fetch;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterAll(() => {
    globalThis.fetch = unmockedFetch;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully fetch the random dog image', async () => {
    globalThis.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'testURL', status: 'success' }),
      } as Response);

    component.dogImage = '';
    await component.fetchDogImage();
    expect(component.dogImage).toEqual('testURL');
  });

  it('should handle errored dog image fetch', async () => {
    globalThis.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'testURL', status: 'error' }),
      } as Response);

    component.dogImage = '';
    await component.fetchDogImage();
    expect(component.dogImage).toEqual('');
  });
});
