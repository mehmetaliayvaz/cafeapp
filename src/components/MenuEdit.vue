<template>
  <div class="MenuEdit">
    <div class="container">
      <MenuNav  @change="change = $event"></MenuNav>
      <MenuList :change="change"></MenuList>
    </div>
  </div>
</template>

<script>
import MenuNav from './layout/MenuNav';
import MenuList from './layout/MenuList';

export default {
  name: 'MenuEdit',
  components:{
    MenuNav,
    MenuList,
  },
  data(){
    return{
      change: 1,
    }
  }
}
</script>

<style lang="scss">

</style>