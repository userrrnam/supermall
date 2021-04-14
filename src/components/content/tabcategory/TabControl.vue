<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item" class="control-item" :class="{actives: index == counter }" @click="onClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      counter:0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    onClick(n){
      this.counter = n
      this.$emit('tabClick',n)
    }
  },  
};
</script>

<style>
.tab-control { 
  display: flex;
  width: 100%;
  justify-content: center;  
  background-color: white;
  line-height: 40px;
}
.control-item {
  flex: 1; 
  text-align: center;
  color: black;
}
 .control-item span{
   display: inline-block;
 }
.actives{ 
  color:orange;
}
.actives span{
   border-bottom: 2px solid orange;
}
</style>