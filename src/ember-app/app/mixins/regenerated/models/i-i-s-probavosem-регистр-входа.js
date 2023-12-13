import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  комната: DS.belongsTo('i-i-s-probavosem-комната', { inverse: null, async: false }),
  входГостя: DS.hasMany('i-i-s-probavosem-вход-гостя', { inverse: 'регистрВхода', async: false }),
  входСотрудника: DS.hasMany('i-i-s-probavosem-вход-сотрудника', { inverse: 'регистрВхода', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probavosem-регистр-входа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-probavosem-регистр-входа.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  входГостя: {
    descriptionKey: 'models.i-i-s-probavosem-регистр-входа.validations.входГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  входСотрудника: {
    descriptionKey: 'models.i-i-s-probavosem-регистр-входа.validations.входСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрВходаE', 'i-i-s-probavosem-регистр-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probavosem-комната', 'Комната', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' }),
    входГостя: hasMany('i-i-s-probavosem-вход-гостя', 'Вход гостя', {
      регистрГостей: belongsTo('i-i-s-probavosem-регистр-гостей', 'ФИО', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        карта: belongsTo('i-i-s-probavosem-карта', '', {
          кодКарты: attr('Карта', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    }),
    входСотрудника: hasMany('i-i-s-probavosem-вход-сотрудника', 'Вход сотрудника', {
      сотрудник: belongsTo('i-i-s-probavosem-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        должности: belongsTo('i-i-s-probavosem-должности', '', {
          должность: attr('Должность', { index: 2 }),
          карта: belongsTo('i-i-s-probavosem-карта', '', {
            кодКарты: attr('Номер карты', { index: 3 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('РегистрВходаL', 'i-i-s-probavosem-регистр-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probavosem-комната', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
