<template>
  <div class="TablesNav">
    <button @click="change1" text="Giriş Kat" :class="{ active: change == 1 }">Giriş Kat</button>
    <button @click="change2" text="Üst Kat" :class="{ active: change == 2 }">Üst Kat</button>
    <button @click="change3" text="Bahçe" :class="{ active: change == 3 }">Bahçe</button>
  </div>
</template>

<script>

export default {
  name: 'TablesNav',

  data(){
    return{
      change: 1,
    }
  },
  methods:{
    change1(){
      this.change = 1;
      this.$emit("change", 1);
    },
    change2(){
      this.change = 2;
      this.$emit("change", 2);
    },
    change3(){
      this.change = 3;
      this.$emit("change", 3);
    },
  }

}
</script>

<style>

</style>