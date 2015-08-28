/*!
**  bauer-plugin-<%= plugin %> -- <%= description %>.
**  Copyright (c) 2015 <%= author_name ? author_name : github_username %> <<%= author_website ? author_website : 'https://github.com/' + github_username %>>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/<%= github_username %>/node-bauer-plugin-<%= plugin %>>
*/
// - -------------------------------------------------------------------- - //

"use strict";

var factory = require("bauer-factory");

// - -------------------------------------------------------------------- - //

module.exports = function(worker,config) {
  
  worker.on("request",function(request,response) {
    
    var error;
    var output;
    
    if (error) {
      response.sendError(error);
    } else {
      response.sendOk({
        output: output
      });
    }
    
  });
  
  worker.sendReady();
  
};

// - -------------------------------------------------------------------- - //
