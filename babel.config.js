/*
In Babel, a preset is a set of plugins used to support particular language features.
The two presets we are using are ES2015 (adds support for ES2015 (or ES6) JavaScript) and react (adds support for JSX).

babel-core - as the name says, this package is the main engine of babel plugin for its dependents to work:
npm i @babel/core --save-dev

babel-preset-env - allows support for ES2015 (ES6) features (compiles ES6 code to ES5):
npm i @babel/preset-env --save-dev

babel-preset-react - allows conversion of JSX to plain JavaScript:
npm i @babel/preset-react --save-dev

babel-loader - allows communication between webpack (we will explain webpack in a bit) and babel:
npm i babel-loader --save-dev
*/

module.exports = {
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}