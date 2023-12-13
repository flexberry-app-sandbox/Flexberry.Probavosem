import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-probavosem-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probavosem-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probavosem-сотрудник-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-probavosem-карта-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probavosem-карта-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probavosem-карта-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-probavosem-комната-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probavosem-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probavosem-комната-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-probavosem-должности-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probavosem-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probavosem-должности-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.документы.caption'),
            title: i18n.t('forms.application.sitemap.отель.документы.title'),
            children: [{
              link: 'i-i-s-probavosem-регистр-входа-l',
              caption: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probavosem-регистр-входа-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probavosem-регистр-входа-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-probavosem-регистр-гостей-l',
              caption: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probavosem-регистр-гостей-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probavosem-регистр-гостей-l.title'),
              icon: 'archive',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})