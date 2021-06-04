<template>
  <div class="Tables">
    <div class="container">

      <TablesNav @change="change = $event"/>
      <TablesContent :change="change" />
      
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
