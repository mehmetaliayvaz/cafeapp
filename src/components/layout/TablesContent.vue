<template>
  <div class="TablesContent">
    <div class="TablesContent-container">
      <h4 v-if="!showAlert && $route.path == '/tables'">Hiç masa eklenmemiş, lütfen "Masa Düzenleme" sayfasından masa ekleyiniz.</h4>
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
        <div class="TablesContent-menu-content">
          <div>
            <MenuEdit  />
            <div class="TablesContent-menu-button">
              <div class="container">
                <button @click="saveOrder">Değişiklikleri Kaydet</button>
                <button @click="endOrder">Siparişi Bitir</button>
              </div>
            </div>
          </div>
          <div style="width: 350px">
            <table class="TablesContent-menu-list">
              <tr>
                <th style="width: 100%">Sipariş Listesi</th>
                <th>Fiyat</th>
                <th></th>
              </tr>
              <tr v-for="(item, index) in getActiveOrders" :key="index">
                <td style="width: 100%">{{ item.dessert }}</td>
                <td style="white-space: nowrap; margin-right: 0.5rem">{{ item.price }} TL</td>
                <td>
                  <svg id="delItem" @click="deleteProduct(index)" width="20px" height="20px" viewBox="0 0 32 32">
                    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
                    <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
                  </svg>
                </td>
              </tr>
            </table>
          </div>
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
    ...mapGetters(['getTablesMenu', 'getActiveOrders', 'getActivePerson', 'getPersons']),
    showAlert(){
      this.getTablesMenu.forEach(item => {
        if(item.active == 1){
          this.isControl = true;
        }
      })
      return this.isControl
    }
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
      isControl: false,
    }
  },
  methods: {
    saveTablesContent(){
      this.$store.state.tables.tables = this.tableContent;
      this.$store.dispatch('setStorageTablesMenu');
      this.$toast.success('Değişiklikler başarıyla kaydedildi...')
    },
    isCreated(){
      this.tableContent = this.getTablesMenu;
    },
    activeOrder(index){
      if(this.getTablesMenu[index].active == 1){
        this.show = 0;
        this.activeIndex = index;
        this.$store.state.activeOrders.activeOrders = this.getTablesMenu[index].content;
      }
    },
    deleteProduct(index){
      this.$store.state.activeOrders.activeOrders.splice(index, 1);
    },
    saveOrder(){
      var path = this.$store.state.tables.tables[this.activeIndex];
      path.content = this.$store.state.activeOrders.activeOrders;
      path.fullness = 1;
      path.person = this.getPersons[this.getActivePerson].name;
      path.date = new Date();
      this.$store.dispatch('setStorageTablesMenu');
      this.$toast.success('Değişiklikler başarıyla kaydedildi...')
      this.show = 1;
    },
    endOrder(){
      this.saveOrder();
      var path = this.$store.state.tables.tables[this.activeIndex];
      var order = {
        date : path.date,
        person : path.person,
        content : path.content,  
      }
      this.$store.state.oldOrders.oldOrders.push(order);
      path.content = [];
      path.date = null;
      path.person = null;
      path.fullness = 0;

      this.$store.dispatch('setStorageTablesMenu');
      this.$store.dispatch('setStorageOldOrders');

      this.show = 1;
      this.$toast.success('Sipariş başarıyla tamamlandı...')
    },
  },

}
</script>

<style lang="scss" scoped>

  #delItem{
    cursor: pointer;
  }


</style>