import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probavosem-вход-гостя', 'Unit | Serializer | i-i-s-probavosem-вход-гостя', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probavosem-вход-гостя',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probavosem-вид-карты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
