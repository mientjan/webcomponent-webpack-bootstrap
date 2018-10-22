/* eslint no-param-reassign: 0 */
/* eslint class-methods-use-this: 0 */

// const fs = require('fs-extra');
// const path = require('path');


class GoogleWebDesignerManifestPlugin {
  constructor(options) {
    this.config = options.config;
  }

  apply(compiler) {
    compiler.hooks.emit.tapPromise('GoogleWebDesignerManifestPlugin', async compilation => {

      const data = '';

      compilation.assets['manifest.json'] = {
        source: () => data,
        size() {
          return this.source().length;
        },
      };

      return compilation;
    });
  }

}

module.exports = GoogleWebDesignerManifestPlugin;
