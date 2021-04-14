<template>
  <div class="recomment">
     <div v-for="item in recommend" :key="item.index" class="rec-item">
       <a :href="item.link">
         <img :src="item.image" alt="">
         <div>{{item.title}}</div>
       </a>
     </div>
  </div>
</template>

<script>
export default {
    name:"RecommendView",
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
}
</script>

<style>
.recomment{ 
  display: flex;
  font-size: 12px; 
  width: 100%;
  height: 100px; 
  padding-top: 20px;
  border-bottom: 8px solid rgba(224,224,224,.5); 
  background-color: white;
}
.rec-item{
  width: 40px;
  height: 40px;
  flex: 1;
  text-align: center; 
}
.recomment img{
  width: 70px;
  height: 70px;
  margin-bottom: 6px;
}
.recomment a{
  text-decoration: none;
  color: black;
}
</style>