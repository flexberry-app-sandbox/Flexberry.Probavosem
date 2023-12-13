import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрВходаMixin
} from '../mixins/regenerated/models/i-i-s-probavosem-регистр-входа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрВходаMixin, Validations, {
});

defineProjections(Model);

export default Model;
