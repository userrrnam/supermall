<template>
  <div class="detail-tabbar">
    <div class="wrapper">
      <div class="shop">
        <img src="@/assets/img/shop1.png" alt="" />
        <img v-show="false" src="@/assets/img/shop2.png" alt="" />
        <h1>店铺</h1>
      </div>
      <div class="service">
        <img src="@/assets/img/service1.png" alt="" />
        <img v-show="false" src="@/assets/img/service2.png" alt="" />
        <h1>客服</h1>
      </div>
      <div class="cart">
        <img src="@/assets/img/car1.png" alt="" />
        <img v-show="false" src="@/assets/img/car2.png" alt="" />
        <h1>购物车</h1>
      </div>
      <div class="add-cart">
        <span @click="carClick">加入购物车</span>
      </div>
      <div class="buy">
        <span>立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailTabBar",
  methods: {
    carClick() {
      
    },
  },
};
</script>

<style scoped>
.detail-tabbar {
  display: fixed;
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  width: 100%;
  height: 49px;
  border-top: 1px solid rgba(244, 244, 244, 0.6);
  background-color: white;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 8px 0 8px;
}
.detail-tabbar img {
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
}
.shop,
.service,
.cart {
  font-size: 12px;
  text-align: center;
}
.detail-tabbar .add-cart,
.buy {
  height: 30px;
  line-height: 30px;
  width: 100px;
  text-align: center;
  border-radius: 20px;
  color: white;
}
.add-cart {
  background-color: red;
}
.buy {
  background-color: orange;
}
</style>