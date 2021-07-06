<template>
  <div class="List">
    <table>
      <tr>
        <th>Tatlı</th>
        <th>Fiyat</th>
        <th></th>
      </tr>
      <tr v-for="(item, index) in getMenu[change-1].contents" :key="index">
        <td>{{ item.dessert }}</td>
        <td>{{ item.price }} TL</td>
        <td v-if="$route.path == '/menu-edit'">
          <svg @click="deleteMenuContents(index)" width="20px" height="20px" viewBox="0 0 32 32">
            <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
            <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
          </svg>
        </td>
        <td v-if="$route.path == '/tables'">
          <svg @click="addProduct(item)" width="20px" height="20px" viewBox="0 0 32 32">
            <path d="M31 12h-11v-11c0-0.552-0.447-1-1-1h-6c-0.553 0-1 0.448-1 1v11h-11c-0.553 0-1 0.448-1 1v6c0 0.553 0.447 1 1 1h11v11c0 0.553 0.447 1 1 1h6c0.553 0 1-0.447 1-1v-11h11c0.553 0 1-0.447 1-1v-6c0-0.552-0.447-1-1-1z"></path>
          </svg>
        </td>
      </tr>
      <tr v-if="this.$route.path == '/menu-edit'">
        <td><input v-model="item.dessert" type="text" placeholder="İsim"></td>
        <td>
          <input v-model="item.price" type="number" name="" placeholder="Fiyat">
        </td>
        <td><button @click="addMenuContents" id="person-button">Ekle</button></td>
      </tr>
      
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuList',
  props: ['change'],
  data(){
    return{
      item: {
        dessert: null,
        price: null,
      }
    }
  },
  computed:{
    ...mapGetters(['getMenu'])
  },
  methods:{
    addMenuContents(){
      if(this.item.dessert != null && this.item.price != null){
        this.$store.state.menu.menu[this.change-1].contents.push(this.item);
        this.$store.dispatch('setStorageMenu');
        this.item = {};
      }
      else{
        this.$toast.error('Boş alan bıraktınız...')
      }
    },
    deleteMenuContents(index){
      this.$store.state.menu.menu[this.change-1].contents.splice(index, 1);
      this.$store.dispatch('setStorageMenu');
    },
    addProduct(item){
      this.$store.state.activeOrders.activeOrders.push(item);
      
    }
  }

}
</script>

<style lang="scss">

</style>