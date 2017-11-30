# Bugsnag: Vue

A [bugsnag-js](https://github.com/bugsnag/bugsnag-js) plugin for [Vue.js](https://vuejs.org/).

## Usage

### Inline

```html
<script src="https://unpkg.com/vue"></script>
<script src="//d2wy8f7a9ursnm.cloudfront.net/4.x.x/bugsnag.min.js"></script>
<script src="//d2wy8f7a9ursnm.cloudfront.net/bugsnag-plugin-vue/1.x.x/bugsnag-vue.min.js"></script>
<script>
  window.bugsnagClient = bugsnag('API_KEY')
  bugsnagClient.use(bugsnag__vue(Vue))
</script>
```

### Bundled

```js
const Vue = require('vue')
const bugsnag = require('bugsnag-js')
const bugsnagVue = require('bugsnag-vue')

const bugsnagClient = bugsnag('API_KEY')
bugsnagClient.use(bugsnagVue(Vue))
```
