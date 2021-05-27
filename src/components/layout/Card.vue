<template>
  <div class="Card" :style=" 'background-color: ' + color">
    <span>67</span>
    <span>Bugün Toplam Sipariş</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['color'],

}
</script>

<style>

</style>