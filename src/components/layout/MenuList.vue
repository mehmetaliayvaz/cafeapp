<template>
  <div class="List">
    <table>
      <tr>
        <th>Tatlı</th>
        <th>Fiyat</th>
        <th></th>
      </tr>
      <tr>
        <td>Tiramusu</td>
        <td>15 TL</td>
        <td>
          <svg width="20px" height="20px" viewBox="0 0 32 32">
            <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
            <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
          </svg>
        </td>
      </tr>
      <tr>
        <td><input type="text" placeholder="İsim"></td>
        <td>
          <input type="number" name="" placeholder="Fiyat">
        </td>
        <td><button id="person-button">Ekle</button></td>
      </tr>
      
    </table>
  </div>
</template>

<script>

export default {
  name: 'MenuList',
  data(){
    return{
      dessert: null,
      price: null,
      category: null,
    }
  },
  computed:{
  },
  methods:{
  
  }

}
</script>

<style>

</style>