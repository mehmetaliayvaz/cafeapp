<template>
  <div class="TablesEdit">
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

      <button id="saveButton">Değişiklikleri Kaydet</button>
      
    </div>
  </div>
</template>

<script>
import TablesContent from './layout/TablesContent';
import TablesNav from './layout/TablesNav';

export default {
  name: 'TablesEdit',
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