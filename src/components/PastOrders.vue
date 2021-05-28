<template>
  <div class="PastOrders">
    <List id="past-orders"></List>
  </div>
</template>

<script>
import List from './layout/List';

export default {
  name: 'PastOrders',
  components:{
    List,
  }
}
</script>

<style lang="scss">
    .PastOrders{
      display: flex;
      justify-content: center;
    }

    #past-orders{
      margin-top: 50px;
    }

</style>