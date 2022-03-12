import { Component, OnInit } from '@angular/core';
import { DOG_IMAGES_URL } from '../globals';
import { DogPhoto, MultipleDogsResponse } from '../types';

@Component({
  selector: 'app-more-dog-photos',
  templateUrl: './more-dog-photos.component.html',
  styleUrls: ['./more-dog-photos.component.scss']
})
export class MoreDogPhotosComponent implements OnInit {
  dogPhotos: DogPhoto[] = []

  ngOnInit(): void {
    this.fetchDogImages();
  }


  /**
   * Perform a request for ten random dog images
   */
   async fetchDogImages() {
    const response = await fetch(`${DOG_IMAGES_URL}/10`);
    const result: MultipleDogsResponse = await response.json();
    console.log(result);
    if (result.status === 'success') {
      this.createDogPhotos(result.message);
    } else {
      console.error('Failed to retrieve the dog images');
    }
  }

  /**
   * Create a list of DogPhoto objects from a list of dog image urls
   * @param dogImages 
   */
  createDogPhotos(dogImages: string[]) {
    this.dogPhotos = [];
    dogImages.forEach((dogImage) => {
      this.dogPhotos.push({ image: dogImage, breed: this.getBreedFromImageURL(dogImage) });
    });
  }

  /**
   * Format the breed name from a dog image urls
   * @param imageURL dog image url containing the breed name
   * @returns string
   */
  getBreedFromImageURL(imageURL: string) {
    let breedArray = imageURL.split("/");
    breedArray = breedArray[breedArray.length - 2].split("-");
    breedArray = breedArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return breedArray.join(" ");
  }
}
