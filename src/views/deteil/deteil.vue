<template>
  <div class="deteil">
    <deteil-item @itemClick="itemClick" ref="detailItem"> </deteil-item>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="scroll">
      <swiper class="swiper" ref="swiper">
        <el-carousel trigger="click" height="310px" arrow="always" autoplay>
          <el-carousel-item v-for="item in topImages" :key="item">
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </swiper>
      <detail-desc :goods="goods"></detail-desc>
      <detail-shop :shop="shop"></detail-shop>
      <detail-img :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-img>
      <detail-param :detailParam="detailParam" ref="param"></detail-param>
      <detail-rate :rate="rate" ref="rate"></detail-rate>
      <goods-list :goods="recommends" ref="goodslist"></goods-list>
    </scroll>
    <detail-tab-bar></detail-tab-bar>
  </div>
</template>

<script>
import Swiper from "../../components/common/swiper/Swiper.vue";
import DeteilItem from "./deteilItem/deteilItem.vue";
import { getDeteil, Goods, getRecommend } from "@/network/deteil.js";
import DetailDesc from "./deteilItem/detailDesc.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import detailShop from "./deteilItem/detailShop.vue";
import DetailImg from "./deteilItem/detailImg.vue";
import detailParam from "./deteilItem/detailParam";
import detailRate from "./deteilItem/detailRate.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import { debounce } from "@/common/utils";
import detailTabBar from "./deteilItem/detailTabBar.vue";

export default {
  name: "Deteil",
  components: {
    DeteilItem,
    Swiper,
    DetailDesc,
    Scroll,
    detailShop,
    DetailImg,
    detailParam,
    detailRate,
    GoodsList,
    detailTabBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      detailParam: {},
      rate: {},
      currentType: 0,
      recommends: [],
      itemImageListener: null,
      itemTop: [],
      getItemTop: null,
      itemPosition: 0,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDeteil(this.iid);
    this.getRecommend();
    this.getItemTop = debounce(() => {
      this.itemTop = [];
      this.itemTop.push(0);
      this.itemTop.push(this.$refs.param.$el.offsetTop);
      this.itemTop.push(this.$refs.rate.$el.offsetTop);
      this.itemTop.push(this.$refs.goodslist.$el.offsetTop);
      this.itemTop.push(Number.MAX_VALUE)
    }, 20);
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 20);
    this.itemImageListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageItem", this.itemImageListener);
  },
  destroyed() {
    this.$bus.$off("itemImageItem", this.itemImageListener);
  },
  methods: {
    /* 监听detailImg图片加载完 */
    imgLoad() {
      const newRefresh = debounce(this.$refs.scroll.refresh, 20);
      this.$on("imgLoad", () => {
        newRefresh();
      });
      this.getItemTop();
    },

    /* 监听滚动 */
    scroll(position) {
      this.itemPosition = -position.y;
      const itemTopy = this.itemPosition;
      let length = this.itemTop.length;
      for (let i = 0; i < length-1; i++) {
       if(this.currentType !== i && ((i < length-1 && itemTopy >= this.itemTop[i] && 
       itemTopy < this.itemTop[i+1]) || (i == length-1 && itemTopy >= this.itemTopy[i]))){
         this.currentType = i
         this.$refs.detailItem.currentType = this.currentType
       }
      }
    },
    getDeteil(iid) {
      getDeteil(iid).then((res) => {
        const data = res.result;
        console.log(data);
        this.topImages = data.itemInfo.topImages;

        /* 获取商品信息 */
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        /* 获取商家的信息 */
        this.shop = data.shopInfo;
        /* 获取商品展示图片 */
        this.detailInfo = data.detailInfo;
        /* 获取商品的尺码 */
        this.detailParam = data.itemParams;
        /* 获取评论 */
        this.rate = data.rate;
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        console.log(res);
        /* 获取推荐商品 */
        this.recommends = res.data.list;
      });
    },
    itemClick(index) {
      this.currentType = index;
      this.$refs.scroll.scrollTo(0, -this.itemTop[index], 1000);
      console.log(index);
    },
  },
};
</script>

<style scoped>
.deteil {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  z-index: 1;
  width: 100%;
}
.swiper {
  margin-top: 44px;
  overflow: hidden;
}
.swiper img {
  width: 100%;
}
.content {
  width: 100%;
  height: calc(100% - 93px);
  position: relative;
}
</style>