/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
var resolve = require('resolve');

process.title = 'wct';

resolve('web-component-tester', {basedir: process.cwd()}, function(error, path) {
  var wct = path ? require(path) : require('..');
  var promise = wct.cli.run(process.env, process.argv.slice(2), process.stdout);
  if (promise) {
    promise.then(() => process.exit(0), () => process.exit(1));
  }
});
