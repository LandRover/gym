import {Component, OnInit, Inject} from '@angular/core';

import templateHTML from './app.component.html';

@Component({
  selector: 'app',
  template: templateHTML
})

export class AppComponent implements OnInit {
  constructor(@Inject('AUTHOR') author) {
    this.author = author;
  }

  ngOnInit() {
    console.log('Initial App');
  }
}