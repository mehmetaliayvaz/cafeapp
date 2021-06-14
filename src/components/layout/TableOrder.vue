<template>
  <div @click="changeFullness" class="TablesContent-table"
      :style="fullness == 1 ? 'background-color: #c7c7c7' : 'background-color: #E5E5E5'">
    <span v-if="fullness == 1"> {{ data.name }} </span>
  </div>
</template>

<script>
export default {
  name: 'TableOrder',
  props: ['data'],
  data(){
    return{
      fullness: 0,
    }
  },
  created(){
    this.fullness = this.data.active;
  },
  methods:{
    changeFullness(){
      this.$emit('change', this.fullness);
    },

  }

}
</script>

<style>

</style>