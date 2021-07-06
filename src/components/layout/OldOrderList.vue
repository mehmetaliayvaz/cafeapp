<template>
  <div class="pastOrders">

    <div v-if="!showDetail" class="List">
      <table>
        <tr>
          <th>Sipariş No</th>
          <th>Tarih</th>
          <th>Tutar</th>
        </tr>
        <tr @click="showOrder(index)" v-for="(item, index) in getOldOrders" :key="index" id="pastOrders">
          <td>#{{ index + 1 }}</td>
          <td>{{ item.date.slice(0, 10) }}</td>
          <td>{{ item.content | price}}</td>
        </tr>
      </table>
    </div>

    <div v-if="showDetail" class="orderDetail">
      <table id="detailTop">
        <tr>
          <th>Sipariş No</th>
          <th>Tarih</th>
          <th>Ekleyen Personel</th>
          <th>Tutar</th>
        </tr>
        <tr>
          <td>#{{ activeIndex + 1 }}</td>
          <td>{{ activeOrder.date.slice(0, 10) }}</td>
          <td>{{ activeOrder.person }}</td>
          <td>{{ activeOrder.content | price }}</td>
        </tr>
      </table>

      <div class="List">
        <table>
          <tr>
            <th>Ürün</th>
            <th>Fiyat</th>
          </tr>
          <tr v-for="(item, index) in activeOrder.content" :key="index">
            <td>{{ item.dessert }}</td>
            <td>{{ item.price }} TL</td>
          </tr>
        </table>
      </div>

      <div class="returnOrder" @click="showDetail = false">
        <span>Geçmiş Siparişlere Geri Dön</span>
        <svg width="15" height="15" viewBox="0 0 32 32">
          <path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"></path>
        </svg>
      </div>

    </div>
    

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OldOrderList',
  computed: {
    ...mapGetters(['getOldOrders'])
  },
  data(){
    return{
      showDetail: false,
      activeOrder: {},
      activeIndex: null,
    }
  },
  methods:{
    showOrder(index){
      this.showDetail = true;
      this.activeIndex = index;
      this.activeOrder = this.getOldOrders[index];
    }
  },
  filters: {
    
    price(value){
      var price = value.reduce((toplam, item) => toplam + parseInt(item.price), 0);
      return price + ' TL';
    }
  },


}
</script>

<style lang="scss" scoped>

  #detailTop{
    margin-top: 50px;

    th{
      text-align: left;
    }

    td{
      padding: 10px 0;
    }

  }

  .returnOrder{
    cursor: pointer;

    span{
      margin-right: 10px;
      color: #B71C1C;
    }

    svg{
      fill: #B71C1C;
    }

    display: flex;
    align-items: center;
  }

</style>