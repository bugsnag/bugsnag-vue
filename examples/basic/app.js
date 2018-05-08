/* global bugsnag, Vue, bugsnag__vue */

// www.bugsnag.com
// https://github.com/bugsnag/bugsnag-vue/tree/master/example
//
// this example app demonstrates some of the basic syntax to get Bugsnag error reporting configured in your Vue project.
// ***********************************************************

// Note that Bugsnag was loaded with two CDN links in index.html, but it will not be active until initialized, either in the html or here in vue.

// Initialize Bugsnag to begin tracking errors. Only an api key is required, but here are some other helpful configuration details:
const bugsnagClient = bugsnag({

  // get your own api key at bugsnag.com
  apiKey: 'API_KEY',

  // if you track deploys or use source maps, make sure to set the correct version.
  appVersion: '1.2.3',

  // Bugsnag can track the number of “sessions” that happen in your application, and calculate a crash rate for each release. This defaults to false.
  autoCaptureSessions: true,

  // defines the release stage for all events that occur in this app.
  releaseStage: 'development',

  //  defines which release stages bugsnag should report. e.g. ignore staging errors.
  notifyReleaseStages: [ 'development', 'production' ],

  // one of the most powerful tools in our library, beforeSend lets you evaluate, modify, add and remove data before sending the error to bugsnag. The actions here will be applied to *all* errors, handled and unhandled.
  beforeSend: function (report) {
    if (report.errorClass === 'Error' && report.severity === 'warning') {
      report.updateMetaData('example', { thing: 'one' })
    }
      // note that if you return false from the beforeSend, this will cancel the entire error report.
  },

  // attached any user data you'd like to report.
  user: {
    name: 'Katherine Johnson',
    email: 'kj@nasa.gov',
    id: '0112358'
  },

  // add any custom attributes relevant to your app. Note that metadata can be added here, in a specific notify() or in a beforeSend.
  metaData: {
    company: {
      name: 'Hogwarts School of Witchcraft and Wizardry'
    }
  },
  // N.B. our notifer automatically creates a metadata tab called "Vue" and populates it with component info.

  // because this is a demo app, below extends the default of 10 notifications per pageload. click away!
  maxEvents: 50
})

// attach the Vue plugin to your bugsnag-js client
bugsnagClient.use(bugsnag__vue(Vue))

// Define the <bad-button/> component
Vue.component('bad-button', {
  template: '#bad-button-template',
  data: function () {
    return { doARenderError: false }
  },
  methods: {
    triggerRenderError: function () {
      this.doARenderError = true
      setTimeout(function () {
        this.doARenderError = false
      }.bind(this), 100)
    }
  }
})
// Define the top-level Vue.js app
var app = new Vue({
  // Hooks into the div#app that exists in the DOM
  el: '#app',
  data: {
    // Just enough data to trigger the errors we need
    doARenderError: false,
    doAWatchError: false
  },
  watch: {
    // A watch function that will throw an error when the
    // value it is watching is set to `true`
    doAWatchError: function (val, oldVal) {
      if (val) {
        try {
          // potentially buggy code goes here
          // for this example, we're just throwing an error explicitly, but you do not need this syntax in your try clause.
          throw new Error('Bad thing!')
        } catch (e) {
          console.log('a handled error has been reported to your Bugsnag dashboard')
          // below modifies the handled error, and then sends it to your dashboard.
          bugsnagClient.notify(e, {
            context: 'Don\'t worry - I handled it.'
          })
        }
      }
    }
  },
  methods: {
    // Sets the data in a way that causes the next render() of this
    // component to throw an error (due to referencing a property
    // of an object that doesn't exist)
    triggerRenderError: function () {
      console.log('an unhandled error has been reported to your Bugsnag dashboard')
      this.doARenderError = true
      setTimeout(function () {
        this.doARenderError = false
      }.bind(this), 100)
    },
    // Throws an error using Vue.js's nextTick() function
    triggerNextTickError: function () {
      console.log('an unhandled error has been reported to your Bugsnag dashboard')
      Vue.nextTick(function () {
        JSON.parse('definitely not json')
      })
    },
    // Changes the value being watched such that it throws an error
    triggerWatchError: function () {
      console.log('an unhandled error has been reported to your Bugsnag dashboard')
      this.doAWatchError = true
      setTimeout(function () {
        this.doAWatchError = false
      }.bind(this), 100)
    }
  }
})

// below is the simplest notification syntax, akin to logging.
console.log('a notification has been reported to your Bugsnag dashboard')
bugsnagClient.notify('End of file')
