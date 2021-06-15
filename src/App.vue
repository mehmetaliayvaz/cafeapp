<template>
  <div id="app">
    <Sidebar />
    <div class="App-content">
      <Header />
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,

  },
  created(){
    this.$store.dispatch('getPersons');
    this.$store.dispatch('getStorageMenu');
    this.$store.dispatch('getStorageTablesMenu');
    this.$store.dispatch('getStorageOldOrders');
  }
}
</script>

<style lang="scss">
  @import './scss/app.scss';

  #app{
    display: flex;
  }

  .App-content{
    width: 100%;
  }


</style>
