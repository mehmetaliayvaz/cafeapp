<template>
  <div class="Header">
    <div class="container">
      <div class="Header-welcome">
        <h4>Hoşgeldiniz {{ getPersons[getActivePerson].name }}</h4>
      </div>
      <div class="Header-right">
        <h4>01.01.2021</h4>
        <img src="../../assets/person-avatar.png" alt="" />
        <div class="Header-right-person">
          <span @click="activePerson(index)" v-for="(person, index) in getPersons" :key="index">{{ person.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'Header',
  computed:{
    ...mapGetters(['getPersons', 'getActivePerson'])
  },
  methods:{
    activePerson(index){
      this.$store.state.persons.activePerson = index;
    }
  },

};
</script>

<style>
</style>