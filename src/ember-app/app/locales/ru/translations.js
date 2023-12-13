import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probavosem',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probavosem',
          title: 'Probavosem'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
