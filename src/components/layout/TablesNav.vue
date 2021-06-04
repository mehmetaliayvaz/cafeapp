<template>
  <div class="ListNav">
    <div class="ListNav-button" v-for="(menu, index) in getTablesMenu" :key="index">
      <button @click="changeShow(index + 1)" 
      :class="{ active: show == (index + 1) }">{{ menu.category }}</button>

    </div>
    <div class="ListNav-input" v-if="this.$route.path == '/tables-edit'">
      <input v-model="menu.category" type="text">
      <svg @click="addTablesCategory" width="20px" height="20px" viewBox="0 0 32 32">
        <path d="M31 12h-11v-11c0-0.552-0.447-1-1-1h-6c-0.553 0-1 0.448-1 1v11h-11c-0.553 0-1 0.448-1 1v6c0 0.553 0.447 1 1 1h11v11c0 0.553 0.447 1 1 1h6c0.553 0 1-0.447 1-1v-11h11c0.553 0 1-0.447 1-1v-6c0-0.552-0.447-1-1-1z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TablesNav',

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
    ...mapGetters(['getTablesMenu'])
  },
  methods:{
    changeShow(id){
      this.show = id;
      this.$emit("change", id)
    },
    addTablesCategory(){
      if(!this.getTablesMenu.includes(this.menu.category)){
        this.$store.dispatch('addTablesCategory', this.menu);
        this.menu.category = null;
      }
      else{
        alert('Bu kategory mevcut...')
      }
    },
  },

}
</script>

<style>

</style>