<template>
  <div class="TablesEdit">
    <div class="container">

      <TablesContent :change="change" />
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