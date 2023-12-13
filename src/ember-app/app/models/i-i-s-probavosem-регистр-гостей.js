import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрГостейMixin
} from '../mixins/regenerated/models/i-i-s-probavosem-регистр-гостей';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрГостейMixin, Validations, {
});

defineProjections(Model);

export default Model;
