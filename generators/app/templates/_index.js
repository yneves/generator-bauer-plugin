/*!
**  bauer-plugin-<%= plugin %> -- <%= description %>.
**  Copyright (c) 2015 <%= author_name ? author_name : github_username %> <<%= author_website ? author_website : 'https://github.com/' + github_username %>>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/<%= github_username %>/node-bauer-plugin-<%= plugin %>>
*/
// - -------------------------------------------------------------------- - //

"use strict";

module.exports = {
  
  name: "<%= plugin %>",
  
  config: {
    workers: 1,
    slots: 1,
    delay: 0
  },
  
  worker: __dirname + "/worker.js",
  promise: __dirname + "/promise.js"
  
};

// - -------------------------------------------------------------------- - //
