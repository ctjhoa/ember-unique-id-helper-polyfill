import { helper } from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';

export default helper(function uniqueId() {
  return guidFor({});
});
