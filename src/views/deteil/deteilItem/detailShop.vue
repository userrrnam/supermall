<template>
  <div class="shopInfo">
    <div class="shop-logo">
      <img :src="shop.shopLogo" alt="" />
      <span class="shop-naem">{{ shop.name }}</span>
    </div>
    <div class="wrapper">
      <div class="goods-sell">
        <div class="cSells">
          <span class="cSell">{{ shop.cSells | sellFilter }}万</span>
          <h1>总销量</h1>
        </div>
        <div class="cGoods">
          <span class="Goods">{{ shop.cGoods }}</span>
          <h1>全部宝贝</h1>
        </div>
      </div>
      <div class="score">
        <ul>
          <li v-for="item in shop.score" :key="item.index">
            <span>{{ item.name }}</span>
            <span>{{ item.score }}</span>
            <span
              :class="{ active: item.isBetter, activeGreen: !item.isBetter }"
              >{{ item.isBetter ? "高" : "底" }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="shopUrl">
        <a :href="shop.allGoodsUrl">
            <div class="name">
                <span>进店逛馆</span>
            </div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  data() {
    return {
      better: true,
    };
  },
  props: {
    shop: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  filters: {
    sellFilter(value) {
      if (value > 10000) {
        value = (value / 10000).toFixed(1);
        return value;
      }
    },
  },
};
</script>

<style scoped>
.shopInfo {
  background-color: white;
}
.wrapper {
  display: flex;
}
.active {
  background-color: red;
}
.activeGreen {
  background-color: green;
}
.active,
.activeGreen {
  display: inline-block;
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  color: white;
  position: absolute;
  right: 25px;
}
.shop-logo {
  width: 100%;
  height: 100px;
  padding: 20px 0 0 15px;
  display: flex;
  align-content: center;
}
.shop-logo span {
  display: block;
  text-align: center;
  margin-left: 15px;
  font-size: 20px;
  line-height: 70px;
}
.shop-logo img {
  width: 70px;
  height: 70px;
}
.goods-sell {
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  border-right: 2px solid rgba(0, 0, 0, 0.13);
}
.cSells {
  text-align: center;
  margin-left: 15px;
}
.cSells .cSell {
  font-size: 20px;
}
.cSells h1,
.cGoods h1 {
  margin-top: 6px;
}
.cGoods{
  text-align: center;
  margin-right: 15px;
}
.score{
    margin-left: 20px;
    position: relative;
    width: 50%;
}
.score ul li{
    margin-bottom: 8px;
    height: 20px;
    line-height: 20px;
}
.score ul li span{
    margin-right: 4px;
}
.shopUrl{
    width: 100px;
    background-color:rgba(112, 128, 144, 0.527);
    border-radius: 50px;
    text-align: center;
    height: 30px;
    line-height:30px;
    margin: 15px auto;
}
.shopUrl a{
    text-decoration:none;
    color: white;
}
</style>