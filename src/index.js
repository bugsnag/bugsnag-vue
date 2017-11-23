const createPlugin = module.exports.createPlugin = (Vue) => ({
  init: (client, BugsnagReport) => {
    Vue.config.errorHandler = (err, vm, info) => {
      const handledState = { severity: 'error', unhandled: true, handledState: { type: 'unhandledException' } }
      const report = new BugsnagReport(err.name, err.message, BugsnagReport.getStacktrace(err), handledState)
      report.updateMetaData('vue', {
        errorInfo: info,
        component: vm ? vm.$options.name || vm.$options._componentTag || 'app root' : undefined,
        props: vm ? vm.$options.propsData : undefined
      })
      client.notify(report)
      console.error(err)
    }
  }
})

module.exports = createPlugin(window.Vue)
