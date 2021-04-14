<template>
  <div class="deteil-item">
    <nav-bar>
      <template v-slot:left>
        <div class="back">
          <img src="@/assets/img/back.png" alt="" @click="backClick" />
        </div>
      </template>
      <template v-slot:center>
        <div class="navbar">
          <div
            class="nav-item"
            v-for="(item, index) in titles"
            :key="item.index"
            :class="{ active: index === currentType }"
            @click="itemClick(index)"
          >
            <div class="item">{{ item }}</div>
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  components: { NavBar },
  name: "deteilItem",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentType: 0,
    };
  },

  methods: {
    itemClick(index) {
      this.currentType = index;
      this.$emit('itemClick',index)
    },
    backClick() {
      this.$router.replace("/home");
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
}
.nav-item {
  font-size: 16px;
  flex: 1;
}
.active {
  color: red;
}
.back {
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.back img {
  margin-top: 8px;
  width: 30px;
  height: 30px;
}
</style>