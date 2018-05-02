# Bugsnag: Vue.js bundled example

This example shows how you can use the Bugsnag JavaScript notifier with
[Vue.js](https://vuejs.org/) that has a build step. Beyond the features shown in
the [basic example](../basic), this setup shows how to initialize a `bugsnagClient` in a module
that you can reuse in various parts of your application.

This application was generated with [vue-cli](https://github.com/vuejs/vue-cli).

## Setup

Try this out with [your own Bugsnag account](https://app.bugsnag.com/user/new)!
You'll be able to see how the errors are reported in the dashboard, how breadcrumbs
are left, how errors are grouped and how they relate to the original source.

To get set up, follow the instructions below. Don't forget to replace the placeholder
API token with your own!

1. Clone the repo and `cd` into this directory:
    ```sh
    git clone git@github.com:bugsnag/bugsnag-vue.git
    cd bugsnag-vue/examples/bundled
    ```
1. Install the dependencies (with either npm or yarn):
    ```sh
    npm i
    ```
    ```sh
    yarn
    ```
1. Replace the `API_KEY` placeholder in [src/lib/bugsnag.js](src/lib/bugsnag.js) with your actual API key.
1. Start the bundler and web server:
    ```sh
    npm run serve
    ```
1. View the example page which will (most likely) be served at: http://localhost:8080/
