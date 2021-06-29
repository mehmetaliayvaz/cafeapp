<template>
  <div class="Cards">
    <div class="container">
      <Card color="#F5365C" :count="fullTable" text="Dolu Masa" />
      <Card color="#0079FB" :count="emptyTable" text="Boş Masa" />
      <Card color="#2DCE89" :count="getPersons.length" text="Toplam Personel" />
      <Card color="#FB6340" :count="getOldOrders.length" text="Toplam Sipariş" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from "./Card";

export default {
  name: "Cards",
  components: {
    Card,
  },
  data(){
    return{
      fullTable: 0,
      emptyTable: 40,
    }
  },
  computed:{
    ...mapGetters(['getOldOrders', 'getPersons', 'getTablesMenu'])
  },
  created(){
    this.getTablesMenu.forEach((item) => {
      if(item.fullness == 1){
        this.fullTable++;
      }
    })
    this.emptyTable = this.emptyTable - this.fullTable;
  },
};
</script>

<style>
</style>