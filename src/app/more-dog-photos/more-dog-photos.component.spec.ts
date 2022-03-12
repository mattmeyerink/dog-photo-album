import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

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

  it('should handle error fetching more dog photos', waitForAsync(async () => {
    const fakeResponse = {
      message: [
        'fakeURL1',
        'fakeURL2',
      ],
      status: 'error'
    };
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({ json: async () => (fakeResponse) } as unknown as Response));

    component.dogPhotos = [];
    await component.fetchDogImages();
    expect(component.dogPhotos.length).toEqual(0);
  }));

  it ('should successfully fetch dog photos', waitForAsync(async () => {
    const fakeResponse = {
      message: [
        'testURL/golden-retriever/image.jpg',
        'testURL/portuguise-water-dog/image.jpg',
        'testURL/bulldog/image.jpg'
      ],
      status: 'success'
    };
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({ json: async () => (fakeResponse) } as unknown as Response));

    await component.fetchDogImages();
    expect(component.dogPhotos.length).toEqual(3);
    expect(component.dogPhotos[0].image).toEqual('testURL/golden-retriever/image.jpg');
    expect(component.dogPhotos[0].breed).toEqual('Golden Retriever');
    expect(component.dogPhotos[1].image).toEqual('testURL/portuguise-water-dog/image.jpg');
    expect(component.dogPhotos[1].breed).toEqual('Portuguise Water Dog');
    expect(component.dogPhotos[2].image).toEqual('testURL/bulldog/image.jpg');
    expect(component.dogPhotos[2].breed).toEqual('Bulldog');
  }));
});
