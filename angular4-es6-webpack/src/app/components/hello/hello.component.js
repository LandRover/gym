import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'hello',
    template: `
        Hello World
    `
})


export class HelloComponent implements OnInit {

    constructor() {}


    ngOnInit() {
        console.log('Initial Hello');
    }

}