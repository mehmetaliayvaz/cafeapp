<template>
  <div class="TablesContent">
    <div class="TablesContent-container">
      <div v-if="this.$route.path == '/tables-edit'">
        <div class="TablesContent-wrapper">
          <Table  
               @change="tableContent[index].active = $event"  
               v-for="(table, index) in getTablesMenu" 
               :data="table" :key="index" />
        </div>
      </div>
      <div v-if="this.$route.path == '/tables' && show == 1">
        <div class="TablesContent-wrapper">
          <TableOrder 
               @click.native="activeOrder(index)"  
               v-for="(table, index) in getTablesMenu" 
               :data="table" :key="index" />
        </div>
      </div>
      <div class="TablesContent-menu" v-if="show == 0">
        <div class="TablesContent-menu-list">
          <MenuEdit  />
          <table>
            <tr>
              <th>Sipariş Listesi</th>
              <th>Fiyat</th>
              <th></th>
            </tr>
            <tr v-for="(item, index) in getActiveOrders" :key="index">
              <td>{{ item.dessert }}</td>
              <td>{{ item.price }}</td>
              <td>
                <svg @click="deleteProduct(index)" width="20px" height="20px" viewBox="0 0 32 32">
                  <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
                  <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
                </svg>
              </td>
            </tr>
          </table>
        </div>  
        <div class="TablesContent-menu-button">
          <button @click="saveOrder">Değişiklikleri Kaydet</button>
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
import MenuEdit from '../MenuEdit';

export default {
  name: 'TablesContent',
  components: {
    Table,
    TableOrder,
    MenuEdit,
  },
  computed:{
    ...mapGetters(['getTablesMenu', 'getActiveOrders'])
  },
  created(){
    this.isCreated();
  },
  data(){
    return{
      tableContent : [
        
      ],
      show: 1,
      activeIndex: null,

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
    activeOrder(index){
      this.show = 0;
      this.activeIndex = index;
    },
    deleteProduct(index){
      this.$store.state.activeOrders.activeOrders.splice(index, 1);
    },
    saveOrder(){
      this.$store.state.tables.tables[this.activeIndex].content = this.$store.state.activeOrders.activeOrders;
      this.$store.state.tables.tables[this.activeIndex].fullness = 1;
      this.$store.dispatch('setStorageTablesMenu');
    }
  },

}
</script>

<style>

</style>