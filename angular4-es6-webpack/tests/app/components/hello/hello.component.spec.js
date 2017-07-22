import {NO_ERRORS_SCHEMA} from '@angular/core';

import {TestBed} from '@angular/core/testing';
import {HelloComponent} from '../../../../src/app/components';

describe('HelloComponent', () => {
    let fixture,
        component,
        element;


    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [HelloComponent]
        })
        .compileComponents();
    });


    beforeEach(() =>  {
        fixture = TestBed.createComponent(HelloComponent);
        component = fixture.componentInstance;
        element = fixture.elementRef.nativeElement;
        fixture.detectChanges();
    });


    it('should be loaded Hello World', () => {
        expect(element.innerHTML).to.have.string('Hello World');
    });
});