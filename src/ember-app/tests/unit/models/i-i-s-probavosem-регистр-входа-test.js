import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probavosem-регистр-входа', 'Unit | Model | i-i-s-probavosem-регистр-входа', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probavosem-вход-гостя',
    'model:i-i-s-probavosem-вход-сотрудника',
    'model:i-i-s-probavosem-должности',
    'model:i-i-s-probavosem-карта',
    'model:i-i-s-probavosem-комната',
    'model:i-i-s-probavosem-регистр-входа',
    'model:i-i-s-probavosem-регистр-гостей',
    'model:i-i-s-probavosem-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
