<template>
  <div class="TablesContent">
    <div class="TablesContent-container">
      <div v-if="this.$route.path == '/tables-edit'">
        <div class="TablesContent-wrapper">
          <Table  @change="tableContent[index].active = $event"  
               v-for="(table, index) in getTablesMenu" 
               :data="table" :key="index" />
        </div>
      </div>
      <div v-if="this.$route.path == '/tables'">
        <div class="TablesContent-wrapper">
          <TableOrder  @change="tableContent[index].active = $event"  
               v-for="(table, index) in getTablesMenu" 
               :data="table" :key="index" />
        </div>
      </div>
      <button v-if="this.$route.path == '/tables-edit'" @click="saveTablesContent">Değişiklikleri Kaydet</button>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import Table from './Table';
import TableOrder from './TableOrder';

export default {
  name: 'TablesContent',
  components: {
    Table,
    TableOrder,
  },
  computed:{
    ...mapGetters(['getTablesMenu'])
  },
  created(){
    this.isCreated();
  },
  data(){
    return{
      tableContent : [
        { name: 'A1', active: 0 },
        { name: 'A2', active: 0 },
        { name: 'A3', active: 0 },
        { name: 'A4', active: 0 },
        { name: 'A5', active: 0 },
        { name: 'A6', active: 0 },
        { name: 'A7', active: 0 },
        { name: 'A8', active: 0 },
        { name: 'A9', active: 0 },
        { name: 'A10', active: 0 },
        { name: 'B1', active: 0 },
        { name: 'B2', active: 0 },
        { name: 'B3', active: 0 },
        { name: 'B4', active: 0 },
        { name: 'B5', active: 0 },
        { name: 'B6', active: 0 },
        { name: 'B7', active: 0 },
        { name: 'B8', active: 0 },
        { name: 'B9', active: 0 },
        { name: 'B10', active: 0 },
        { name: 'C1', active: 0 },
        { name: 'C2', active: 0 },
        { name: 'C3', active: 0 },
        { name: 'C4', active: 0 },
        { name: 'C5', active: 0 },
        { name: 'C6', active: 0 },
        { name: 'C7', active: 0 },
        { name: 'C8', active: 0 },
        { name: 'C9', active: 0 },
        { name: 'C10', active: 0 },
        { name: 'D1', active: 0 },
        { name: 'D2', active: 0 },
        { name: 'D3', active: 0 },
        { name: 'D4', active: 0 },
        { name: 'D5', active: 0 },
        { name: 'D6', active: 0 },
        { name: 'D7', active: 0 },
        { name: 'D8', active: 0 },
        { name: 'D9', active: 0 },
        { name: 'D10', active: 0 },
      ],

    }
  },
  methods: {
    saveTablesContent(){
      this.$store.state.tables.tables = this.tableContent;
      this.$store.dispatch('setStorageTablesMenu');
    },
    isCreated(){
      this.tableContent = this.getTablesMenu;
    },
  },

}
</script>

<style>

</style>