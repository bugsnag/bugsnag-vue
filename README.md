### Deprecation notice

This package is now deprecated. All projects should upgrade to our universal JS notifier: [@bugsnag/js](https://github.com/bugsnag/bugsnag-js) and switch to the new version of this plugin:  [@bugsnag/plugin-vue](https://github.com/bugsnag/bugsnag-js/blob/master/packages/plugin-vue). See the [upgrade guide]( https://github.com/bugsnag/bugsnag-js/blob/master/UPGRADING.md) for more details.

It will continue to exist on the npm registry and work with Bugsnag's API for the foreseeable future. However, it will no longer receive updates unless they are absolutely critical.

Please upgrade at your earliest convenience.

---

# Bugsnag: Vue

[![Build Status](https://travis-ci.org/bugsnag/bugsnag-vue.svg?branch=master)](https://travis-ci.org/bugsnag/bugsnag-vue)
[![NPM](https://img.shields.io/npm/v/bugsnag-vue.svg)](https://npmjs.org/package/bugsnag-vue)

A [bugsnag-js](https://github.com/bugsnag/bugsnag-js) plugin for [Vue.js](https://vuejs.org/).

This package enables you to integrate Bugsnag's error reporting with a Vue.js application at a detailed level. It creates and configures a Vue `ErrorHandler` which will capture and report unhandled errors in your app.

Reported errors will contain useful debugging info from Vue's internals, such as the component name, props and any other context that Vue can provide.

## Installation

You can opt to install the package from npm, using the instructions below. Alternatively you can load the plugin from our CDN via a `<script/>` tag.

### CDN

```html
<script src="//d2wy8f7a9ursnm.cloudfront.net/v4/bugsnag.min.js"></script>
<script src="//d2wy8f7a9ursnm.cloudfront.net/bugsnag-plugins/v1/bugsnag-vue.min.js"></script>
```

### npm

```sh
npm i --save bugsnag-js bugsnag-vue
# or
yarn add bugsnag-js bugsnag-vue
```

## Usage

Depending on how your application is structured, usage differs slightly:

### Inline script tag

The script tag creates a global function called `bugsnag__vue` which needs to be passed a reference to the Vue object. Ensure that Vue is loaded/available before calling this function.

```html
<script>
  window.bugsnagClient = bugsnag('API_KEY')
  // after Vue has been loaded…
  bugsnagClient.use(bugsnag__vue(Vue))
</script>
```

See the [examples](examples) for more info.

### Bundled

If you installed the package from npm, usage will look more like the following snippet. Again, ensure you have a reference to `Vue` before you create the plugin.

```js
const Vue = require('vue')
const bugsnag = require('bugsnag-js')
const bugsnagVue = require('bugsnag-vue')

const bugsnagClient = bugsnag('API_KEY')
bugsnagClient.use(bugsnagVue(Vue))
```

## Support

* Check out the [documentation](https://docs.bugsnag.com/platforms/browsers/)
* [Search open and closed issues](https://github.com/bugsnag/bugsnag-vue/issues?q=is%3Aissue) for similar problems
* [Report a bug or request a feature](https://github.com/bugsnag/bugsnag-vue/issues/new)

## License

The Bugsnag JS library and official plugins are free software released under the MIT License. See [LICENSE.txt](LICENSE.txt) for details.
