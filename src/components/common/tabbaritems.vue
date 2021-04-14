<template>
  <div class="items" @click="onClick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :class="{active:isActive}" ><slot name="text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
    path: String
  },
  computed: {
    isActive() {
        return this.$route.path == this.path
    },
  },
  methods: {
    onClick() {
      this.$router.replace(this.path).catch(err => err);
    },
  },
};
</script>

<style>
.items{
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 15px;
}
.items .img{
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
  
}
.active {
  color: red;
}
</style>