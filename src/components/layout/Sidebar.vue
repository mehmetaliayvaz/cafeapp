<template>
  <div class="Sidebar">
    <div class="Sidebar-logo">
      <router-link to="/">
        <h3>CafeApp</h3>
      </router-link>
    </div>
    <div class="Sidebar-nav">
      <router-link to="/" :class="{ active: $route.path === '/' }">
        <svg width="20px" height="20px" viewBox="0 0 32 32">
          <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
        </svg>
        <span>Ana Sayfa</span>
      </router-link>
      <router-link to="/tables" :class="{ active: $route.path === '/tables' }">
      <svg width="20px" height="20px" viewBox="0 0 32 32">
        <path d="M0 2v28h32v-28h-32zM12 20v-6h8v6h-8zM20 22v6h-8v-6h8zM20 6v6h-8v-6h8zM10 6v6h-8v-6h8zM2 14h8v6h-8v-6zM22 14h8v6h-8v-6zM22 12v-6h8v6h-8zM2 22h8v6h-8v-6zM22 28v-6h8v6h-8z"></path>
      </svg>
        <span>Masalar - Yeni Sipariş</span>
      </router-link>
      <router-link to="/tables-edit" :class="{ active: $route.path === '/tables-edit' }">
        <svg width="20px" height="20px" viewBox="0 0 24 24">
          <path d="M11 3h-7c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h7c0.552 0 1-0.448 1-1s-0.448-1-1-1zM17.793 1.793l-9.5 9.5c-0.122 0.121-0.217 0.28-0.263 0.465l-1 4c-0.039 0.15-0.042 0.318 0 0.485 0.134 0.536 0.677 0.862 1.213 0.728l4-1c0.167-0.041 0.33-0.129 0.465-0.263l9.5-9.5c0.609-0.609 0.914-1.41 0.914-2.207s-0.305-1.598-0.914-2.207-1.411-0.915-2.208-0.915-1.598 0.305-2.207 0.914zM19.207 3.207c0.219-0.219 0.504-0.328 0.793-0.328s0.574 0.109 0.793 0.328 0.328 0.504 0.328 0.793-0.109 0.574-0.328 0.793l-9.304 9.304-2.114 0.529 0.529-2.114z"></path>
        </svg>
        <span>Masa Düzenleme</span>
      </router-link>
      <router-link to="/menu-edit" :class="{ active: $route.path === '/menu-edit' }">
        <svg width="20px" height="20px" viewBox="0 0 32 32">
          <path d="M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z"></path>
        </svg>
        <span>Menü Düzenleme</span>
      </router-link>
      <router-link to="/person-edit" :class="{ active: $route.path === '/person-edit' }">
        <svg width="20px" height="20px" viewBox="0 0 36 32">
          <path d="M24 24.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
          <path d="M10.225 24.854c1.728-1.13 3.877-1.989 6.243-2.513-0.47-0.556-0.897-1.176-1.265-1.844-0.95-1.726-1.453-3.627-1.453-5.497 0-2.689 0-5.228 0.956-7.305 0.928-2.016 2.598-3.265 4.976-3.734-0.529-2.39-1.936-3.961-5.682-3.961-6 0-6 4.029-6 9 0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h8.719c0.454-0.403 0.956-0.787 1.506-1.146z"></path>
        </svg>
        <span>Personel Ekle-Çıkar</span>
      </router-link>
      <router-link to="/past-orders" :class="{ active: $route.path === '/past-orders' }">
        <svg width="20px" height="20px" viewBox="0 0 34 32">
          <path d="M20 2c7.732 0 14 6.268 14 14s-6.268 14-14 14v-3c2.938 0 5.701-1.144 7.778-3.222s3.222-4.84 3.222-7.778c0-2.938-1.144-5.701-3.222-7.778s-4.84-3.222-7.778-3.222c-2.938 0-5.701 1.144-7.778 3.222-1.598 1.598-2.643 3.601-3.041 5.778h5.819l-7 8-7-8h5.143c0.971-6.784 6.804-12 13.857-12zM26 14v4h-8v-10h4v6z"></path>
        </svg>
        <span>Geçmiş Siparişler</span>
      </router-link>
      <router-link to="/about" :class="{ active: $route.path === '/about' }">
        <svg width="20" height="20" viewBox="0 0 32 32">
          <path d="M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z"></path>
          <path d="M20 24h-8v-2h2v-6h-2v-2h6v8h2z"></path>
          <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
        </svg>
        <span>Hakkında</span>
      </router-link>
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