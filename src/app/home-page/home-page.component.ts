import { Component } from '@angular/core';
import { DOG_IMAGES_URL } from '../globals';
import { SingleDogResponse } from '../types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  dogImage: string = '';

  constructor() { 
    this.fetchDogImage();
  }

  /**
   * Perform a request for a single dog image
   */
  async fetchDogImage() {
    const response = await fetch(DOG_IMAGES_URL);
    const result: SingleDogResponse = await response.json();
    if (result.status === 'success') {
      this.dogImage = result.message;
    } else {
      console.error('Failed to retrieve the dog image');
    }
  }
}
