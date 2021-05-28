<template>
  <div class="ListNav">
    <button @click="changeShow(1)" :class="{ active: show == 1 }">Yemek</button>
    <button @click="changeShow(2)" :class="{ active: show == 2 }">Fast-Food</button>
    <button @click="changeShow(3)" :class="{ active: show == 3 }">Tatlı</button>
    <button @click="changeShow(4)" :class="{ active: show == 4 }">İçecek</button>
    <button @click="changeShow(5)" :class="{ active: show == 5 }">Kahve</button>
  </div>
  
</template>

<script>
export default {
  name: 'ListNav',
  data(){
    return{
      show: 1,
    }
  },
  methods:{
    changeShow(id){
      this.show = id;
      this.$emit('change', id)
    },
  },

}
</script>

<style>

</style>