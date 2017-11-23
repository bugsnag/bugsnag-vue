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
      if (val) throw new Error('Doh!')
    }
  },
  methods: {
    // Sets the data in a way that causes the next render() of this
    // component to throw an error (due to referencing a property
    // of an object that doesn't exist)
    triggerRenderError: function () {
      this.doARenderError = true
      setTimeout(function () {
        this.doARenderError = false
      }.bind(this), 100)
    },
    // Throws an error using Vue.js's nextTick() function
    triggerNextTickError: function () {
      Vue.nextTick(function () {
        JSON.parse('definitely not json')
      })
    },
    // Changes the value being watched such that it throws an error
    triggerWatchError: function () {
      this.doAWatchError = true
      setTimeout(function () {
        this.doAWatchError = false
      }.bind(this), 100)
    }
  }
})
