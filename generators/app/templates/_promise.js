/*!
**  bauer-plugin-<%= plugin %> -- <%= description %>.
**  Copyright (c) 2015 <%= author_name ? author_name : github_username %> <<%= author_website ? author_website : 'https://github.com/' + github_username %>>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/<%= github_username %>/node-bauer-plugin-<%= plugin %>>
*/
// - -------------------------------------------------------------------- - //

"use strict";

// - -------------------------------------------------------------------- - //

module.exports = {
  
  "<%= plugin %>": {
    
    // .<%= plugin %>(options Object) :Promise
    o: function(options) {
      return this.then(function() {
        return this.requestWorker("<%= plugin %>",options);
      });
    }
    
  }
      
};

// - -------------------------------------------------------------------- - //
