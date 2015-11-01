import { Component, View } from 'angular2/angular2';

@Component({ selector: 'message' })

@View({
  template: `
<h3>Im a message: {{ text }}!</h3>
  `
})

export default class MessageComponent {
  constructor() {
    this.text = 'Hi';
  }
}