const test = require('tape')
const createPlugin = require('../')
const BugsnagClient = require('bugsnag-js/base/client')

const NOTIFIER = { name: 'bugsnag-vue-test', version: '0.0.0', url: 'http://yes.please' }

test('bugsnag vue: throws when missing Vue', t => {
  t.throws(() => createPlugin())
  t.end()
})

test('bugsnag vue: installs Vue.config.errorHandler', t => {
  const client = new BugsnagClient(NOTIFIER)
  client.logger(console)
  client.transport({
    sendReport: (logger, config, report) => {
      t.equal(report.events[0].errorClass, 'Error')
      t.equal(report.events[0].errorMessage, 'oops')
      t.ok(report.events[0].metaData['vue'])
      t.end()
    }
  })
  client.configure({ apiKey: 'API_KEYYY' })
  const Vue = { config: {} }
  client.use(createPlugin(Vue))
  t.equal(typeof Vue.config.errorHandler, 'function')
  Vue.config.errorHandler(new Error('oops'), { $root: true, $options: {} }, 'callback for watcher "fooBarBaz"')
})

test('bugsnag vue: classify(str)', t => {
  t.equal(createPlugin.classify('foo_bar'), 'FooBar')
  t.equal(createPlugin.classify('foo-bar'), 'FooBar')
  t.end()
})
