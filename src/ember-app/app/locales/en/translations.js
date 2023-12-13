import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbavosemДолжностиLForm from './forms/i-i-s-probavosem-должности-l';
import IISProbavosemКартаLForm from './forms/i-i-s-probavosem-карта-l';
import IISProbavosemКомнатаLForm from './forms/i-i-s-probavosem-комната-l';
import IISProbavosemРегистрВходаLForm from './forms/i-i-s-probavosem-регистр-входа-l';
import IISProbavosemРегистрГостейLForm from './forms/i-i-s-probavosem-регистр-гостей-l';
import IISProbavosemСотрудникLForm from './forms/i-i-s-probavosem-сотрудник-l';
import IISProbavosemДолжностиEForm from './forms/i-i-s-probavosem-должности-e';
import IISProbavosemКартаEForm from './forms/i-i-s-probavosem-карта-e';
import IISProbavosemКомнатаEForm from './forms/i-i-s-probavosem-комната-e';
import IISProbavosemРегистрВходаEForm from './forms/i-i-s-probavosem-регистр-входа-e';
import IISProbavosemРегистрГостейEForm from './forms/i-i-s-probavosem-регистр-гостей-e';
import IISProbavosemСотрудникEForm from './forms/i-i-s-probavosem-сотрудник-e';
import IISProbavosemВходГостяModel from './models/i-i-s-probavosem-вход-гостя';
import IISProbavosemВходСотрудникаModel from './models/i-i-s-probavosem-вход-сотрудника';
import IISProbavosemДолжностиModel from './models/i-i-s-probavosem-должности';
import IISProbavosemКартаModel from './models/i-i-s-probavosem-карта';
import IISProbavosemКомнатаModel from './models/i-i-s-probavosem-комната';
import IISProbavosemРегистрВходаModel from './models/i-i-s-probavosem-регистр-входа';
import IISProbavosemРегистрГостейModel from './models/i-i-s-probavosem-регистр-гостей';
import IISProbavosemСотрудникModel from './models/i-i-s-probavosem-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probavosem-вход-гостя': IISProbavosemВходГостяModel,
    'i-i-s-probavosem-вход-сотрудника': IISProbavosemВходСотрудникаModel,
    'i-i-s-probavosem-должности': IISProbavosemДолжностиModel,
    'i-i-s-probavosem-карта': IISProbavosemКартаModel,
    'i-i-s-probavosem-комната': IISProbavosemКомнатаModel,
    'i-i-s-probavosem-регистр-входа': IISProbavosemРегистрВходаModel,
    'i-i-s-probavosem-регистр-гостей': IISProbavosemРегистрГостейModel,
    'i-i-s-probavosem-сотрудник': IISProbavosemСотрудникModel
  },

  'application-name': 'Probavosem',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probavosem',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probavosem',
          title: 'Probavosem'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-probavosem-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-probavosem-карта-l': {
            caption: 'Карта',
            title: ''
          },
          'i-i-s-probavosem-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-probavosem-должности-l': {
            caption: 'Должности',
            title: ''
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-probavosem-регистр-входа-l': {
              caption: 'Регистрация Входа',
              title: 'Регистр входа'
            },
            'i-i-s-probavosem-регистр-гостей-l': {
              caption: 'Регистрация Гостей',
              title: 'Регистр гостей'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probavosem-должности-l': IISProbavosemДолжностиLForm,
    'i-i-s-probavosem-карта-l': IISProbavosemКартаLForm,
    'i-i-s-probavosem-комната-l': IISProbavosemКомнатаLForm,
    'i-i-s-probavosem-регистр-входа-l': IISProbavosemРегистрВходаLForm,
    'i-i-s-probavosem-регистр-гостей-l': IISProbavosemРегистрГостейLForm,
    'i-i-s-probavosem-сотрудник-l': IISProbavosemСотрудникLForm,
    'i-i-s-probavosem-должности-e': IISProbavosemДолжностиEForm,
    'i-i-s-probavosem-карта-e': IISProbavosemКартаEForm,
    'i-i-s-probavosem-комната-e': IISProbavosemКомнатаEForm,
    'i-i-s-probavosem-регистр-входа-e': IISProbavosemРегистрВходаEForm,
    'i-i-s-probavosem-регистр-гостей-e': IISProbavosemРегистрГостейEForm,
    'i-i-s-probavosem-сотрудник-e': IISProbavosemСотрудникEForm
  },

});

export default translations;
