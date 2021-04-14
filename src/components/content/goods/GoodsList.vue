<template>
  <div class="good">
    <goods-list-item v-for="item in goods" :key="item.index" :goods="item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  },
};
</script>

<style>
.good {
  padding-top: 10px;
  background-color: white;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
}
</style>