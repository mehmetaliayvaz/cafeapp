<template>
  <div class="MenuEdit">
    <div class="container">
      <ListNav></ListNav>
      <MenuList></MenuList>
    </div>
  </div>
</template>

<script>
import ListNav from './layout/ListNav';
import MenuList from './layout/MenuList';

export default {
  name: 'MenuEdit',
  components:{
    ListNav,
    MenuList,
  }
}
</script>

<style lang="scss">

</style>