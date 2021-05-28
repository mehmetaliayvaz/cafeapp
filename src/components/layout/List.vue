<template>
  <div class="List">
    <table>
      <tr>
        <th>Tatlı</th>
        <th>Tarih</th>
        <th>Tutar</th>
        <th></th>
        <th v-if="false"></th>
      </tr>
      <tr v-for="i in 10" :key="i">
        <td>Trileçe</td>
        <td>01.01.2021</td>
        <td>45 TL</td>
        <td>
          <svg width="20px" height="20px" viewBox="0 0 32 32">
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
      
    </table>
  </div>
</template>

<script>

export default {
  name: 'List',

}
</script>

<style>

</style>