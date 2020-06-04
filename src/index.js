const angular = require('angular');

import registerComponents from './components';

import style from './assets/scss/main.scss';

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

registerComponents(ngModule);
