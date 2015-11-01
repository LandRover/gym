import { Component, View } from 'angular2/angular2';

@Component({ selector: 'starter' })

@View({
  template: `
<h1>Hello World!</h1>
<h2>Hi: {{ loc }}!</h2>
  `
})

export default class StarterComponent {
  constructor() {
    this.loc = 'Hi';
  }
}