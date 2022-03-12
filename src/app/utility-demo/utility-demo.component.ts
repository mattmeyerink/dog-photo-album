import { Component, OnInit } from '@angular/core';
import { animateRight, delay, removeDuplicates } from 'src/utils';

@Component({
  selector: 'app-utility-demo',
  templateUrl: './utility-demo.component.html',
  styleUrls: ['./utility-demo.component.scss']
})
export class UtilityDemoComponent {
  sampleArray: any[] = ['1', 2, '1', 'Hello', 'World', '1', 2, 'World'];
  timeoutMessage: string = '';
  timeoutLength: number = 0;

  demoRemoveDuplicates() {
    this.sampleArray = removeDuplicates(this.sampleArray);
  }

  async demoDelay() {
    this.timeoutMessage = '';
    await delay(this.timeoutLength);
    this.timeoutMessage = 'Here I am!';
  }

  demoAnimateRight() {
    const element = document.getElementById('btnToMove');

    if (element) {
      animateRight(element);
    }
  }
}
