<template>
  <div class="imgItem">
    <div class="descs">
      <span class="desc">{{ detailInfo.desc }}</span>
    </div>
    <div
      class="warpper"
      v-for="item in detailInfo.detailImage"
      :key="item.index"
    >
      <span class="key">{{ item.key }}</span>
      <div class="img" v-for="item1 in item.list" :key="item1.index">
        <img :src="item1" alt="" @load="imgLoad"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailImg",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.desc {
  display: block;
  margin: 10px;
  width: 95%;
  opacity: .7;
}
.desc::before{
  display: block;
  content: '';
  width: 120px;
  height: 0;
  border: 1px solid black;
  opacity: .3;
  margin-bottom: 10px;
  margin-left: 5px;
}
.desc::after{
  content: '';
  display: block;
   width: 120px;
  height: 0;
  border: 1px solid black;
  opacity: .3;
  margin-bottom: 10px;
  position: absolute;
  right: 20px;
  margin-top: 20px;

}
.wrapper img {
  margin: 5px 10px;
  border-radius: 10px;
  width: 95%;
}
.key {
  margin-left: 10px;
  opacity: 0.6;
}
</style>