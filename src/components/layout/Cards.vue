<template>
  <div class="Cards">
    <div class="container">
      <Card color="#F5365C" :count="getPersons" text="Aktif Masa" />
      <Card color="#0079FB" :count="getPersons" text="Toplam Personel" />
      <Card color="#2DCE89" :count="getPersons" text="Toplam Personel" />
      <Card color="#FB6340" :count="getOldOrders" text="Toplam Sipariş" />
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
  computed:{
    ...mapGetters(['getOldOrders', 'getPersons'])
  }
};
</script>

<style>
</style>