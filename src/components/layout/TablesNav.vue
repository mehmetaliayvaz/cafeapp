<template>
  <div class="TablesNav">
    <button @click="changeShow(1)" :class="{ active: show == 1 }">Giriş Kat</button>
    <button @click="changeShow(2)" :class="{ active: show == 2 }">Üst Kat</button>
    <button @click="changeShow(3)" :class="{ active: show == 3 }">Bahçe</button>
  </div>
</template>

<script>

export default {
  name: 'TablesNav',

  data(){
    return{
      show: 1,
    }
  },
  methods:{
    changeShow(id){
      this.show = id;
      this.$emit("change", id)
    },
  },

}
</script>

<style>

</style>