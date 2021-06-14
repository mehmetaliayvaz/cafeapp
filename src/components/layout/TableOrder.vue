<template>
  <div class="TablesContent-table"
      :style="active == 1 ? 'background-color: #c7c7c7' : 'background-color: #E5E5E5'">
    <span v-if="active == 1" 
    :style="fullness == 1 ? 'color: #B71C1C' : 'color: #fff'">{{ data.name }} </span>
  </div>
</template>

<script>
export default {
  name: 'TableOrder',
  props: ['data'],
  data(){
    return{
      active: 0,
      fullness: 1,
    }
  },
  created(){
    this.active = this.data.active;
    this.fullness = this.data.fullness;
  },

}
</script>

<style>

</style>