import Vue from 'vue'
import App from './App'
const request = require('superagent')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
  events: {
    'sendSearch': function (search) {
      console.log('Send search from parent')
      request
      .post('/api')
      .send({ data: { search: search } })
      .end(function (req, res) {
        console.log('got it')
      })
    }
  }

})
