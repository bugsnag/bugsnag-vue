# Bugsnag: Vue.js Example

This example shows how you can use the Bugsnag JavaScript notifier with
[Vue.js](https://vuejs.org/).

Whilst the notifier reports any errors that are uncaught, there are certain types
of error specific to Vue.js that get swallowed by its own error handler. The example
shown here shows how to use the `bugsnag-vue` plugin to this work for you.

## Setup

Try this out with [your own Bugsnag account](https://app.bugsnag.com/user/new)!
You'll be able to see how the errors are reported in the dashboard, how breadcrumbs
are left, how errors are grouped and how they relate to the original source.

To get set up, follow the instructions below. Don't forget to replace the placeholder
API token with your own!

1. Clone the repo and `cd` this this directory:
    ```sh
    git clone git@github.com:bugsnag/bugsnag-vue.git
    cd bugsnag-vue
    ```
1. Install the dependencies (with either npm or yarn):
    ```sh
    npm i
    ```
    ```sh
    yarn
    ```
1. Replace the `API_KEY` placeholder in [index.html](index.html) with your actual API key.
1. Start a web server:
    ```sh
    npm start
    ```
1. View the example page which will (most likely) be served at: http://localhost:5000/
