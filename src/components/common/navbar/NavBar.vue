<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  position: fixed;
  background-color: white;
  top:0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  align-content: center;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
.left {
  width: 60px;
  height: 100%;
}
.center {
  flex: 1 1 auto;
}
.right {
  width: 60px;
  height: 100%;
}
</style>