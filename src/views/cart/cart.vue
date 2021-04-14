<template>
  <div id="cart">
    我是购物车
    <h1>{{$store.state.counter}}</h1>
    <button @click="increment">+</button>
  
    <h2>{{$store.getters.add10crement}}</h2>
  </div>
</template>
<script>
export default {
name:'cart',
methods: {
  increment(){
    this.$store.commit('addcrement')
  }
}
}
</script>

<style scoped>
#cart{
  height: 100vh;
}
  button{
    background-color:#eee;
    border:none;

  }
</style>