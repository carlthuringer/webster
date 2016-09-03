<template>
  <div id="app">
    Search:
    <input v-model="search">
    <button v-on:click="sendSearch">Go</button>
    <ul>
      <li v-for="link in links">
        <a href="http://en.wikipedia.org/{{ link }}">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  data: function () {
    return {
      search: '',
      links: []
    }
  },
  components: {
    Hello
  },
  methods: {
    sendSearch: function () {
      this.$dispatch('sendSearch', this.search)
    }
  },
  events: {
    'receivedLinksData': function (data) {
      console.log(this.links)
      // this.links.push('wat')
      // this.links.length = 0
      this.links = data
    }
  }
}
</script>

<style>

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
