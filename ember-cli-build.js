'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

const app = function(defaults) {
  let app = new EmberAddon(defaults, {
    snippetPaths: ['tests/dummy/app/snippets'],
    fingerprint: {
      exclude: ['assets/wednesday_black.svg']
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};

module.exports = app;
