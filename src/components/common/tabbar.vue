<template>
  <div class="container ">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar",
};
</script>

<style>
/* .container {
  width: 100%;
  display: flex;
  height: 49px;
  background-color: #eee;
  position: fixed;
  bottom:0;
  font-size: 12px;
  justify-content: center;
} */
.container{
  width: 100%;
  height: 49px;
  background-color: #eee;
  display: flex;
  position: fixed;
  bottom: 0;
  right:0;
  left: 0;
  font-size: 14px;
  justify-content: center;
  align-items: center;
}
</style>