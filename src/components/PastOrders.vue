<template>
  <div class="PastOrders">
    <OldOrderList /> 
  </div>
</template>

<script>
import OldOrderList from './layout/OldOrderList.vue';

export default {
  name: 'PastOrders',
  components:{
    OldOrderList,
  }
}
</script>

<style lang="scss">
    .PastOrders{
      display: flex;
      justify-content: center;
    }

    

</style>