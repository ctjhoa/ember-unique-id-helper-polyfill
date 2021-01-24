import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | unique-id', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders unique id', async function(assert) {
    await render(hbs`{{unique-id}}`);

    let firstId = this.element.textContent.trim();

    await render(hbs`{{unique-id}}`);

    let secondId = this.element.textContent.trim()

    assert.notEqual(firstId, secondId);
  });
});
