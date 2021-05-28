<template>
  <div class="MenuEdit">
    <div class="container">
      <ListNav></ListNav>
      <List></List>
    </div>
  </div>
</template>

<script>
import ListNav from './layout/ListNav';
import List from './layout/List';

export default {
  name: 'MenuEdit',
  components:{
    ListNav,
    List,
  }
}
</script>

<style lang="scss">

</style>