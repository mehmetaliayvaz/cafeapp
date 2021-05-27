<template>
  <div class="Sidebar">
    <div class="Sidebar-logo">
      <h3>CafeApp</h3>
    </div>
    <div class="Sidebar-nav">
      <router-link to="/">Ana Sayfa</router-link>
      <router-link to="/tables">Masalar</router-link>
      <router-link to="/tables-edit">Masa Düzenleme</router-link>
      <router-link to="/menu-edit">Menü Düzenleme</router-link>
      <router-link to="/person-edit">Personel Ekle-Çıkar</router-link>
      <router-link to="/past-orders">Geçmiş Siparişler</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

}
</script>

<style>

</style>