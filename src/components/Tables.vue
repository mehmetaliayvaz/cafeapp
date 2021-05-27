<template>
  <div class="Tables">
    <div class="container">

      <TablesNav @change="change = $event"/>

      <transition name="fade" mode="out-in">
        <TablesContent v-if="change == 1" />
      </transition>
      <transition name="fade" mode="out-in">
        <TablesContent v-if="change == 2" />
      </transition>
      <transition name="fade" mode="out-in">
        <TablesContent v-if="change == 3" />
      </transition>
      
    </div>
  </div>
</template>

<script>
import TablesContent from './layout/TablesContent';
import TablesNav from './layout/TablesNav';

export default {
  name: 'Tables',
  components: {
    TablesContent,
    TablesNav,
  },
  data(){
    return{
      change: 1,
    }
  },
}
</script>

<style>

</style>
