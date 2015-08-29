"use strict";
var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      "Welcome to the " + chalk.red("bauer plugin") + " generator!"
    ));

    var prompts = [{
      type    : "input",
      name    : "plugin",
      message : "Plugin name"
    },{
      type    : "input",
      name    : "description",
      message : "Plugin description"
    },{
      type    : "input",
      name    : "github_username",
      message : "Github username",
      store   : true
    },{
      type    : "input",
      name    : "npm_email",
      message : "NPM email",
      store   : true
    },{
      type    : "input",
      name    : "author_name",
      message : "Author's name",
      store   : true,
      default: ""
    },{
      type    : "input",
      name    : "author_website",
      message : "Author's website",
      store   : true,
      default: ""
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath("_package.json"),
        this.destinationPath("package.json"),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath("_index.js"),
        this.destinationPath("lib/index.js"),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath("_worker.js"),
        this.destinationPath("lib/worker.js"),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath("_promise.js"),
        this.destinationPath("lib/promise.js"),
        this.props
      );
      this.fs.copy(
        this.templatePath("_test.js"),
        this.destinationPath("test/test-" + this.props.plugin + ".js"),
        this.props
      );
      this.fs.copy(
        this.templatePath("_sample.js"),
        this.destinationPath("test/sample/sample.js"),
        this.props
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath("_mocha.opts"),
        this.destinationPath("test/mocha.opts")
      );
      this.fs.copy(
        this.templatePath("jshintrc"),
        this.destinationPath(".jshintrc")
      );
      this.fs.copy(
        this.templatePath("gitignore"),
        this.destinationPath(".gitignore")
      );
      this.fs.copy(
        this.templatePath("npmignore"),
        this.destinationPath(".npmignore")
      );
      this.fs.copy(
        this.templatePath("yo-rc.json"),
        this.destinationPath(".yo-rc.json")
      );
      this.fs.copy(
        this.templatePath("_LICENSE"),
        this.destinationPath("LICENSE")
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
