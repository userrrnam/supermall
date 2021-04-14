<template>
  <div class="Swiper-container">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Swiper",
};
</script>
  
<style scoped>
.Swiper-container {
  width: 100%;
  height: 100%;
}

</style>