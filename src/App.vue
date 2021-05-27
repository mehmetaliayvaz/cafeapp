<template>
  <div id="app">
    <Sidebar />

  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar,

  }
}
</script>

<style lang="scss">
  @import './scss/app.scss';


</style>
