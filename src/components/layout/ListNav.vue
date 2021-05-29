<template>
  <div class="ListNav">
    <button v-for="(menu, index) in getMenu" :key="index" @click="changeShow(index + 1)" :class="{ active: show == (index + 1)}">{{ menu }}</button>
    <input v-model="category" type="text">
    <svg @click="addCategory" width="20px" height="20px">
      <path d="M31 12h-11v-11c0-0.552-0.447-1-1-1h-6c-0.553 0-1 0.448-1 1v11h-11c-0.553 0-1 0.448-1 1v6c0 0.553 0.447 1 1 1h11v11c0 0.553 0.447 1 1 1h6c0.553 0 1-0.447 1-1v-11h11c0.553 0 1-0.447 1-1v-6c0-0.552-0.447-1-1-1z"></path>
    </svg>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ListNav',
  data(){
    return{
      show: 1,
      category: null,
    }
  },
  computed:{
    ...mapGetters(['getMenu'])
  },
  methods:{
    changeShow(id){
      this.show = id;
      this.$emit('change', id)
    },
    addCategory(){
      if(!this.getMenu.includes(this.category)){
        this.$store.dispatch('addCategory', this.category);
        this.category = null;
      }
      else{
        alert('Bu kategory mevcut...')
      }
    }
  },

}
</script>

<style>

</style>