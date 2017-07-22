import './src/polyfills';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/proxy';
import 'zone.js/dist/mocha-patch';

import {TestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

let testContext = require.context('./tests', true, /\.spec\.js/);
testContext.keys().forEach(testContext);