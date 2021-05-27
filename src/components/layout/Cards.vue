<template>
  <div class="Cards">
    <div class="container">
      <Card color="#F5365C" />
      <Card color="#0079FB" />
      <Card color="#2DCE89" />
      <Card color="#FB6340" />
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Cards",
  components: {
    Card,
  },
};
</script>

<style>
</style>