<template>
  <div class="hello">
    <p>This example shows how to initialize the <code>bugsnagClient</code> once and import<br/>it invarious parts of your application to report your own errors to Bugsnag.</p>

    <h3>Use case: notifying Bugsnag of a handled error</h3>
    <p>Example: we try to parse some user-provided JSON which we know might fail</p>
    <p><textarea v-model="json"></textarea></p>
    <button v-on:click="parse">Consume JSON</button>

    <h3>Use case: notifying Bugsnag when a certain condition is met</h3>
    <p>Example: we want to know if a user ends up clicking this button more than 10 times.</p>
    <button v-on:click="click">Click me</button>
    <p>Clicks: {{ clicks }}</p>

  </div>
</template>

<script>
import bugsnagClient from '../lib/bugsnag'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    clicks: 0,
    json: '{ "not quite: json" }'
  }),
  methods: {
    parse: function () {
      try {
        JSON.parse(this.json)
      } catch (e) {
        bugsnagClient.notify(e)
      }
    },
    click: function () {
      this.clicks += 1
      if (this.clicks === 10) {
        bugsnagClient.notify(new Error('user clicked button too many times!'), { severity: 'info' })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
