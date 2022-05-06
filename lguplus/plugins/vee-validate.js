import { configure, extend } from 'vee-validate';

import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/ko.json';

// import ko from 'vee-validate/dist/locale/ko.json';
// localize('ko', ko);

const config = {
  classes: {
    valid: 'is-valid',
    invalid: ['is-invalid', 'is-err'],
  },
  bails: true,
  skipOptional: true,
  mode: 'passive', // aggressive, passive, lazy, eager
  useConstraintAttrs: true,
};

// Sets the options.
configure(config);

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});
