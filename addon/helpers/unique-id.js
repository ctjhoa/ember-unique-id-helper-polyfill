import { helper } from '@ember/component/helper';

export default helper(uniqueId);

// Copy-pasted from the ember-source implementation: https://github.com/emberjs/ember.js/pull/19882
function uniqueId() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) =>
    (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  );
}
