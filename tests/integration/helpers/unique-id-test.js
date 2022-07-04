import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | unique-id', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders unique id', async function (assert) {
    await render(hbs`{{unique-id}}`);

    let firstId = this.element.textContent.trim();

    await render(hbs`{{unique-id}}`);

    let secondId = this.element.textContent.trim();

    assert.notEqual(firstId, secondId);
  });

  test('it only generates unique ids that start with a letter', async function (assert) {
    let iterations = 1000;
    let regExpLetterStart = /^[a-z]/;

    assert.expect(iterations);

    for (let i = 0; i < iterations; i++) {
      await render(hbs`{{unique-id}}`);

      let uniqueId = this.element.textContent.trim();

      assert.true(regExpLetterStart.test(uniqueId));
    }
  });
});
