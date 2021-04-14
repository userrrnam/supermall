<template>
  <div class="desc" v-if="goods.services">
    <div class="title">
      {{ goods.title }}
    </div>
    <div class="price">
      <span class="realPrice" v-show="goods.realPrice">¥{{ goods.realPrice }}</span>
      <span class="oldPrice" v-show="goods.oldPrice">{{ goods.oldPrice }}</span>
      <div class="discount" :style="{ backgroundColor: goods.bgColor }" v-show="goods.discount"><span  >
        {{ goods.discount }}</span></div>
    </div>
    <div class="columns">
      <ul class="wrapper">
        <li>{{ goods.columns[0] }}</li>
        <li class="item">{{ goods.columns[1] }}</li>
        <li>{{ goods.services[goods.services.length - 1].name }}</li>
      </ul>
    </div>
    <div class="services">
      <ul class="service">
        <li v-for="item in goods.services" :key="item.index"><img :src="item.icon" alt="">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailDesc",
  data() {
    return {
      bgColor: null,
    };
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.desc {
   padding: 12px 12px;
    border-bottom: 10px solid rgba(169, 169, 169, 0.116);
    background-color: white;
}
.title {
  text-overflow: ellipsis;
  font-size: 18px;
  margin-bottom: 10px;
}
.price .realPrice {
  font-size: 20px;
  color: palevioletred;
}
.price span {
  margin-right: 4px;
}
.price .oldPrice {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.411);
}
.price .discount {
  display: inline;
  line-height: 20px;
  text-align: center;
  border-radius: 8px;
  position: relative;
  top: -8px;
  color: white;
}
.price .discount span{
    margin-left: 3px;
    font-size: 11px;
}
.columns{
    margin-top: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 10px;
    color: darkgray;
}
.columns .wrapper{
    display: flex;
}
.columns .wrapper .item{
    flex:1;
    text-align: center;
}
.services {
    margin-top: 15px;
    padding-bottom: 5px;
}
.services img{
    width: 15px;
    height: 15px;
    position: relative;
    top: 3px;
    margin-right: 4px;
}
.service{
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content:flex-start;
    font-size: 12px;
    color: darkgray;
}
.service li{
    margin-right: 5px;
}
</style>