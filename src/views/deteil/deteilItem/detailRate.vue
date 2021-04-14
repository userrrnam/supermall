<template>
  <div class="rate" v-if="Object.keys(rate).lenght != 0">
    <div v-for="items in rate.list" :key="items.index">
      <div class="top">
        <img :src="items.user.avatar" alt="" />
        <span>{{ items.user.uname }}</span>
      </div>
      <h1 class="content">{{ items.content }}</h1>
      <div class="center">
        <span>{{ items.created }}</span>
        <span>{{ items.style }}</span>
      </div>
      <div class="images" v-if="items.images">
        <img :src="items.images[0]" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailRate",
  props: {
    rate: {
      type: Object,
      defalut() {
        return null;
      },
    },
  },
};
</script>

<style scoped>
.top {
    width: 100%;
    margin:20px;
    height: 60px;
    background-color:white;
    display: flex;
    align-items: center;
}
.top img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.top span{
    display: inline-block;
    font-size: 18px;
}
.content{
    width: 95%;
    padding:0 20px;
    line-height: 18px;
}
.center{
    width: 95%;
    margin: 10px 15px;
}
.center span {
    margin-right: 15px;
}
.images img{
    width: 100px;
    height: 100px;
    margin-left: 20px;
}
</style>