<template>
  <div id="home">
    <nav-bar class="home-nav"
      ><template v-slot:center>购物车</template></nav-bar
    >
    <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-co"
        v-show="isTabFixed"
      >
      </tab-control>
    <scroll
      class="content"
      @scroll="scroll"
      @pullingUp="pullingUp"
      ref="scroll"
      :probeType = "3"
      :pullUpLoad = "true"
    >
     
      <swiper-item :banner="banner" @imgLoad="swiperImgItem"></swiper-item>
      <recommend-view :recommend="recommends"></recommend-view>
      <feature></feature>

      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      >
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top  v-show="this.isShow" @click.native="backClick"></back-top>
  </div>
</template> 
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import RecommendView from "./homeitem/RecommendView.vue";
import Feature from "./homeitem/Feature.vue";
import TabControl from "@/components/content/tabcategory/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backtop/BackTop.vue";
import swiperItem from '@/components/common/swiper/swiperitem.vue'
import { debounce } from '@/common/utils.js'

export default {
  name: "home",
  components: {
    NavBar,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    swiperItem
  },
    data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      tabOffSetTop:0,
      isTabFixed:false,
      saveY:0,
      itemImageListener:null
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    /* 监听图片加载完成 */
    
  },
  mounted(){ 
    const refresh = debounce(this.$refs.scroll.refresh,20)
    this.itemImageListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageItem',this.itemImageListener)
  },
  destroyed(){
    console.log("fsdfsd");
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
    this.$bus.$off('itemImageItem',this.itemImageListener) 
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /* 轮播图图片加载监听 */
    swiperImgItem(){
     /* 所有组件都有一个属性$el 获取组件中元素 */
     /* 获取tabcontrol的高度距离 */
      this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop
    },
   
    /* 回到顶部 */
      backClick(){
         this.$refs.scroll.scrollTo(0,0)
      },
    /* 获取加载 */
    pullingUp() {
      this.getHomeGoods(this.currentType);
    },
    /* 获取滚动位置事件 */
    scroll(position) {
      this.isShow = position.y < -1000
      if((-position.y) > this.tabOffSetTop-40){
          this.isTabFixed = true
      }else if((-position.y) < this.tabOffSetTop){
        this.isTabFixed = false
      }
    },
    /* 时间监听相关的方法 */
    tabClick(n) {
      if (n == 0) {
        this.currentType = "pop";
      } else if (n == 1) {
        this.currentType = "new";
      } else if (n == 2) {
        this.currentType = "sell";
      }
      this.$refs.tabControl1.counter = n
      this.$refs.tabControl2.counter = n
    },

    /* 网络请求相关方法 */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // this指向组件对象
        /* banner 轮播图*/
        this.banner = res.data.banner.list;
        /* recomment推荐 */
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  overflow: hidden;
}
.home-nav {
  background-color: sandybrown;
  color: white;
  font-size: 18px;
  font-weight: 600;
}
.content {
  width: 100%;
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
}
.tab-co{
  position: absolute;
  top: 40px;
  z-index: 1;
}
</style>