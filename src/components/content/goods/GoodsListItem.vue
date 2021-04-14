<template>
  <div class="good-list-item">
    <div class="wrapper" @click="goodsClick"> 
     <img :src="showImage" @load="imgLoad">
      <div class="title">
        {{goods.title}}
      </div>
      <div class="content">
        <span class="price">{{goods.price}}</span>
        <span class="cfav">{{goods.cfav}}</span>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  name: "GoodsListItem", 
  props:{
    goods:{
      type:Object,
      default(){
        return []
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('itemImageItem')
    },
    goodsClick(){
   
      this.$router.push('/deteil/'+this.goods.iid)
    }
  },
   computed:{
     showImage(){
       return this.goods.images || this.goods.image || this.goods.show.img
     }
   }
};
</script>

<style scoped> 
  .wrapper{
    flex: 1;
  }
  .wrapper .title{
    text-overflow: ellipsis;
    width: 170px;
    overflow: hidden;
    white-space: nowrap;
    margin: 5px 0 0 0;
  }
  .wrapper img{
      width: 180px;
      height: 250px;
      border-radius: 6px;
  }
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
  }
  .content .price{
    color: red;
    margin-right: 10px;
  }
  .content .price::before{
    content: '¥';
  }
  .content .cfav::before{
      content: '✨';
  }
</style>