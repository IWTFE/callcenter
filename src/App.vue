<template>
  <div id="app">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <v-appmain></v-appmain>
    <v-store></v-store>
    <!-- <v-footer></v-footer> -->
</template>
<script>
import header from './components/header.vue'
import sidebar from './components/sidebar.vue'
import appmain from './components/appmain.vue'
import store from './components/calltab/store.vue'
export default {
  name: 'app',
  data () {
    return {
      tabIndex: 1
    }
  },
  components: {
    'v-head': header,
    'v-sidebar': sidebar,
    'v-appmain': appmain,
    'v-store': store

  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
