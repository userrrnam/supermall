<template>
  <div class="swiper-item">
    <swiper>
      <el-carousel trigger="click" height="210px">
        <el-carousel-item v-for="item in banner" :key="item.index">
          <a :href="item.link">
            <img class="img" :src="item.image" alt="" @load="imgLoad" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </swiper>
  </div>
</template>

<script>
import Swiper from "./Swiper.vue";
export default {
  components: { Swiper },
  name: "swiperItem",
    data(){
    return{
        isLoad: false,
    }
  
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("imgLoad");
        this.isLoad = true
      }
    },
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>