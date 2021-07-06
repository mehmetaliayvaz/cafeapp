<template>
  <div class="Home">
    <Cards />
    <div class="container">
      <p>"Menü Düzenleme" sayfasından menü, "Masa düzenleme" sayfasından masa ekleyebilirsiniz.</p>
      <br>
      <button @click="getExample">Örnek Veriler Getirmek için Tıkla</button>
    </div>
  </div>
</template>

<script>
import Cards from './layout/Cards';
import { persons, menu, oldOrders, tablesMenu }  from '../example.js';

export default {
  name: 'Home',
  components: {
    Cards,
  },
  methods: {
    getExample(){
      localStorage.setItem('persons', JSON.stringify(persons));
      localStorage.setItem('menu', JSON.stringify(menu));
      localStorage.setItem('oldOrders', JSON.stringify(oldOrders));
      localStorage.setItem('tablesMenu', JSON.stringify(tablesMenu));
      this.$store.dispatch('getPersons');
      this.$store.dispatch('getStorageMenu');
      this.$store.dispatch('getStorageTablesMenu');
      this.$store.dispatch('getStorageOldOrders');
    }
  }

}
</script>

<style lang="scss">
  .Cards{
    margin: 30px 0;
  }

</style>