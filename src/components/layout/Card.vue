<template>
  <div class="Card" :style=" 'background-color: ' + color">
    <span>{{ count == null || undefined ? 0 : count  }}</span>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['color', 'count', 'text'],
  // filters: {
  //   price(value){
  //     var price = value.reduce((toplam, item) => toplam + parseInt(item.price), 0);
  //     return price + ' TL';
  //   }
  // },

}
</script>

<style>

</style>