<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:icon>
          <img class="img" src="@/assets/img/home1.png" alt="" />
        </template>
        <template v-slot:icon-active>
          <img class="img" src="@/assets/img/home2.png" alt="" />
        </template>
        <template v-slot:text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:icon>
          <img class="img" src="@/assets/img/category1.png" alt="" />
        </template>
        <template v-slot:icon-active><img class="img" src="@/assets/img/category2.png" alt="" />
        </template>
        <template v-slot:text>
          <div>分类</div> 
          </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:icon>
          <img class="img" src="@/assets/img/car1.png" alt="" />
          </template>
          <template v-slot:icon-active><img class="img" src="@/assets/img/car2.png" alt="" />
        </template>
        <template v-slot:text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:icon>
          <img class="img" src="@/assets/img/Mine1.png" alt="" />
        </template>
        <template v-slot:icon-active>
          <img class="img" src="@/assets/img/mine.png" alt="" />
        </template>
        <template v-slot:text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar.vue";
import TabBarItem from "@/components/common/tabbaritems.vue";
export default {
  name: "MainItem",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style>
</style>