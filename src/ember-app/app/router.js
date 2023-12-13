import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probavosem-должности-l');
  this.route('i-i-s-probavosem-должности-e',
  { path: 'i-i-s-probavosem-должности-e/:id' });
  this.route('i-i-s-probavosem-должности-e.new',
  { path: 'i-i-s-probavosem-должности-e/new' });
  this.route('i-i-s-probavosem-карта-l');
  this.route('i-i-s-probavosem-карта-e',
  { path: 'i-i-s-probavosem-карта-e/:id' });
  this.route('i-i-s-probavosem-карта-e.new',
  { path: 'i-i-s-probavosem-карта-e/new' });
  this.route('i-i-s-probavosem-комната-l');
  this.route('i-i-s-probavosem-комната-e',
  { path: 'i-i-s-probavosem-комната-e/:id' });
  this.route('i-i-s-probavosem-комната-e.new',
  { path: 'i-i-s-probavosem-комната-e/new' });
  this.route('i-i-s-probavosem-регистр-входа-l');
  this.route('i-i-s-probavosem-регистр-входа-e',
  { path: 'i-i-s-probavosem-регистр-входа-e/:id' });
  this.route('i-i-s-probavosem-регистр-входа-e.new',
  { path: 'i-i-s-probavosem-регистр-входа-e/new' });
  this.route('i-i-s-probavosem-регистр-гостей-l');
  this.route('i-i-s-probavosem-регистр-гостей-e',
  { path: 'i-i-s-probavosem-регистр-гостей-e/:id' });
  this.route('i-i-s-probavosem-регистр-гостей-e.new',
  { path: 'i-i-s-probavosem-регистр-гостей-e/new' });
  this.route('i-i-s-probavosem-сотрудник-l');
  this.route('i-i-s-probavosem-сотрудник-e',
  { path: 'i-i-s-probavosem-сотрудник-e/:id' });
  this.route('i-i-s-probavosem-сотрудник-e.new',
  { path: 'i-i-s-probavosem-сотрудник-e/new' });
});

export default Router;
