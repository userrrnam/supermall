<template>
  <div id="app">
    <main-item> </main-item>
    <keep-alive exclude="Deteil">
         <router-view></router-view>
    </keep-alive>
 
  </div>
</template>
<script>
import MainItem from "@/components/common/MainItem.vue";
export default {
  name: "App",
  components: {
    MainItem,
  },
}
</script>
<style scoped>
@import "./assets/css/reset.css";
</style>