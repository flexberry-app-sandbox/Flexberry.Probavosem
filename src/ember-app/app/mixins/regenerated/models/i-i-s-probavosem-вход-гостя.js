import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  регистрГостей: DS.belongsTo('i-i-s-probavosem-регистр-гостей', { inverse: null, async: false }),
  регистрВхода: DS.belongsTo('i-i-s-probavosem-регистр-входа', { inverse: 'входГостя', async: false })
});

export let ValidationRules = {
  регистрГостей: {
    descriptionKey: 'models.i-i-s-probavosem-вход-гостя.validations.регистрГостей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрВхода: {
    descriptionKey: 'models.i-i-s-probavosem-вход-гостя.validations.регистрВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходГостяE', 'i-i-s-probavosem-вход-гостя', {
    регистрГостей: belongsTo('i-i-s-probavosem-регистр-гостей', 'ФИО', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      карта: belongsTo('i-i-s-probavosem-карта', '', {
        кодКарты: attr('Карта', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
