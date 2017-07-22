import {NO_ERRORS_SCHEMA} from '@angular/core';

import {TestBed} from '@angular/core/testing';
import {AppComponent} from '../../../../src/app/components';

describe('AppComponent', () => {
    let fixture,
        component,
        element;


    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{provide: 'AUTHOR', useValue: 'LR'}],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [AppComponent]
        })
        .compileComponents();
    });


    beforeEach(() =>  {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        element = fixture.elementRef.nativeElement;
        fixture.detectChanges();
    });


    it('should be created', () => {
        expect(component.author).to.equal('LR');
    });


    it('should be loaded with HTML', () => {
        expect(element.innerHTML).to.have.string('App Loaded');
    });
});