<template>
  <div class="List">
    <table>
      <tr>
        <th>İsim</th>
        <th>Rol</th>
        <th></th>
      </tr>
      <tr v-for="(item ,index) in getPersons" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.role }}</td>
        <td>
          <svg v-if="item.role != 'admin'" @click="deletePerson(index)" width="20px" height="20px" viewBox="0 0 32 32">
            <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
            <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
          </svg>
        </td>
        <td v-if="false">
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <path d="M11 9h4v2h-4v4h-2v-4h-4v-2h4v-4h2v4zM10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM10 18c4.418 0 8-3.582 8-8s-3.582-8-8-8v0c-4.418 0-8 3.582-8 8s3.582 8 8 8v0z"></path>
          </svg>
        </td>
      </tr>
      <tr>
        <td><input v-model="person.name" type="text" placeholder="İsim"></td>
        <td>
          <select v-model="person.role">
            <option value="Şef">Şef</option>
            <option value="Garson">Garson</option>
            <option value="Komi">Komi</option>
          </select>
        </td>
        <td><button @click="savePerson" id="person-button">Ekle</button></td>
      </tr>
      
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PersonList',
  data(){
    return{
      person: {
        name: null,
        role: null,
      }
    }
  },
  computed:{
    ...mapGetters(['getPersons']),
  },
  methods:{
    savePerson(){
      if(this.person.name != null && this.person.role != null){
        this.$store.dispatch('savePerson', this.person);
        this.person = {};
      }
      else{
        alert('Boş alan bırakmayınız!');
      }
    },
    deletePerson(index){
      this.$store.dispatch('deletePerson', index);
    },

  }

}
</script>

<style>

</style>