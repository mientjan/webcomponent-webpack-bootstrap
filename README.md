# Web Component Webpack Bootstrap (beta)

This is a bootstrap github to give developers a quick startup project to
create their web components with lit-element from polymer.

### How to start?

 1. clone project
 2. run ```npm install```
 3. code your webcomponent in ./src/index.js
 4. got to your terminal (cmd on windows) ```npm run build``` in the same directory
 5. publish to npm or import index.js as a script tag.
 6. add

__todo__
* ~~add default unit test setup for webcomponents~~
* ~~test bootstrap for all compatible browser matrix.~~
* add post-css support to css.
* ~~add quick development setup~~ with webpack hot-reload support.
* Use babel preset-env "useBuiltIns: 'usage'" when feature is stable.
* add option to opt out of required library data. So its required once.
* Add eslint
* Add more documentation
* Add more examples
* Add reference for future yeoman generator

## unit tests

This bootstrap uses Web Component tester to do end-to-end testing.
It enables you to test your elements locally, against all of your installed
browsers, or remotely, via Sauce Labs. It is built on top of popular third-party tools, including:

* Mocha for a test framework, complete with support for BDD and TDD.
* Chai for more assertion types that can be used with your Mocha tests.
* Sinon for spies, stubs, and mocks.
* Selenium for running tests against multiple browsers.
* Accessibility Developer Tools for accessibility audits.

### lead by example
For demonstration purposes we added some testing scripts in test/* so you
can learn by example. We will use a "special" video element as a nice fixture
because there is a lot to test with a video element on different devices and
platforms.

You are provided with a local config to test on local browsers or with a
**saucelabs config**. With a saucelabs you are able to test on every
conceivable platform imaginable. Create a account, a .env file in the
root and set your SAUCE_USERNAME and SAUCE_ACCESS_KEY in there or
rename placeholder.env to .env

```text
SAUCE_USERNAME=your_user_name
SAUCE_ACCESS_KEY=your-access-key-that-is-here

```

### lit-element
For more documentation about all the methods that are available in ./src/index.js
check https://github.com/Polymer/lit-element / https://github.com/Polymer/lit-element#bigger-example
