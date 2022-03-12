import { Component, OnInit } from '@angular/core';
import { animateRight, delay, removeDuplicates } from 'src/utils';

@Component({
  selector: 'app-utility-demo',
  templateUrl: './utility-demo.component.html',
  styleUrls: ['./utility-demo.component.scss']
})
export class UtilityDemoComponent implements OnInit {
  sampleArray: any[] = ['1', 2, '1', 'Hello', 'World', '1', 2, 'World'];
  timeoutMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  demoRemoveDuplicates() {
    this.sampleArray = removeDuplicates(this.sampleArray);
  }

  async demoDelay() {
    await delay(2000);
    this.timeoutMessage = 'Here I am!';
  }

  demoAnimateRight() {
    const element = document.getElementById('btnToMove');

    if (element) {
      animateRight(element);
    }
  }
}
