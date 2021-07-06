<template>
  <div class="ListNav">
    <div class="ListNav-button" v-for="(menu, index) in getMenu" :key="index">
      <button @click="changeShow(index + 1)" 
              :class="{ active: show == (index + 1)}">{{ menu.category }}</button>
      <svg v-if="index != 0 && $route.path == '/menu-edit'" @click="deleteCategory(index)" width="15" height="15" viewBox="0 0 32 32">
        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
        <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
      </svg>
    </div>
    <div v-if="this.$route.path =='/menu-edit'" class="ListNav-input">
      <input v-model="menu.category" type="text" placeholder="yeni kategori">
      <svg @click="addCategory" width="20px" height="20px" viewBox="0 0 32 32">
        <path d="M31 12h-11v-11c0-0.552-0.447-1-1-1h-6c-0.553 0-1 0.448-1 1v11h-11c-0.553 0-1 0.448-1 1v6c0 0.553 0.447 1 1 1h11v11c0 0.553 0.447 1 1 1h6c0.553 0 1-0.447 1-1v-11h11c0.553 0 1-0.447 1-1v-6c0-0.552-0.447-1-1-1z"></path>
      </svg>
    </div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MenuNav',
  data(){
    return{
      show: 1,
      menu: {
        category: null,
        contents: [],
      }
    }
  },
  computed:{
    ...mapGetters(['getMenu'])
  },
  methods:{
    changeShow(id){
      this.show = id;
      this.$emit('change', id);
    },
    addCategory(){
      if(this.menu.category != null){
        this.$store.dispatch('addCategory', this.menu);
        this.menu.category = null;
      }
      else{
        this.$toast.error('Kategori adı boş olamaz...');
      }
    },
    deleteCategory(index){
      var control = confirm('Kategoriyi silerseniz içindekilerde silinecektir. Silinsin mi?');
      if(control){
        this.$store.state.menu.menu.splice(index, 1);
        this.$store.dispatch('setStorageMenu');
      }
    }
  },

}
</script>

<style>

</style>