<template>
  <div class="TablesContent">
    <div class="TablesContent-row" v-for="i in letters" :key="i">
      <Table v-for="n in 10" :row="i" :column="n" :key="n" />
    </div>
  </div>
</template>

<script>
import Table from './Table';

export default {
  name: 'TablesContent',
  components: {
    Table,
  },
  data(){
    return{
      letters: ['A', 'B', 'C', 'D', 'E'],
    }
  }

}
</script>

<style>

</style>