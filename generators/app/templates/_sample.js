// - -------------------------------------------------------------------- - //

"use strict";

var assert = require("assert");
var Crawler = require("bauer-crawler");

var crawler = new Crawler({
  config: {
    
  }
});

crawler.loadPlugin(__dirname + "/../../");

crawler.start(function() {
  
  return this.Promise.bind(this);
});

// - -------------------------------------------------------------------- - //
