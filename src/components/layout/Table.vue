<template>
  <div @click="changeFullness" class="TablesContent-row-table" :style="fullness == 1 ? 'background-color: #FB6340' : 'background-color: #fff'">
    <span v-if="fullness == 1">{{ row + column}}</span>
    <svg v-else viewBox="0 0 32 32">
      <path d="M31 12h-11v-11c0-0.552-0.447-1-1-1h-6c-0.553 0-1 0.448-1 1v11h-11c-0.553 0-1 0.448-1 1v6c0 0.553 0.447 1 1 1h11v11c0 0.553 0.447 1 1 1h6c0.553 0 1-0.447 1-1v-11h11c0.553 0 1-0.447 1-1v-6c0-0.552-0.447-1-1-1z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ['row', 'column'],
  data(){
    return{
      fullness: 0,
    }
  },
  methods:{
    changeFullness(){
      this.fullness = !this.fullness;
    }
  }
};
</script>

<style>
</style>