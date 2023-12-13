import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудник: DS.belongsTo('i-i-s-probavosem-сотрудник', { inverse: null, async: false }),
  регистрВхода: DS.belongsTo('i-i-s-probavosem-регистр-входа', { inverse: 'входСотрудника', async: false })
});

export let ValidationRules = {
  сотрудник: {
    descriptionKey: 'models.i-i-s-probavosem-вход-сотрудника.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрВхода: {
    descriptionKey: 'models.i-i-s-probavosem-вход-сотрудника.validations.регистрВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходСотрудникаE', 'i-i-s-probavosem-вход-сотрудника', {
    сотрудник: belongsTo('i-i-s-probavosem-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      должности: belongsTo('i-i-s-probavosem-должности', '', {
        должность: attr('Должность', { index: 2 }),
        карта: belongsTo('i-i-s-probavosem-карта', '', {
          кодКарты: attr('Номер карты', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
