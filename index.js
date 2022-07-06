'use strict';

const VersionChecker = require('ember-cli-version-checker');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: require('./package').name,

  included(...args) {
    this._super.included.apply(this, args);

    const emberSource = new VersionChecker(this.project).for('ember-source');

    this.hasNativeIdHelper = emberSource.gte('4.4.0-beta.1');

    if (this.hasNativeIdHelper && this.parent === this.project) {
      let message =
        'The `{{unique-id}}` helper is available natively since Ember 4.4.0-beta.1. You can remove `ember-unique-id-helper-polyfill` from your `package.json`.';

      this.ui.writeDeprecateLine(message);
    }
  },

  treeForApp(...args) {
    return this.filterTree(this._super.treeForApp.apply(this, args));
  },

  treeForAddon(...args) {
    return this.filterTree(this._super.treeForAddon.apply(this, args));
  },

  filterTree(tree) {
    if (this.hasNativeIdHelper) {
      return new Funnel(tree, { exclude: [/helpers/] });
    }

    return tree;
  },
};
