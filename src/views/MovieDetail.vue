<template>
  <div class="wrap">
    <h1>길 정거</h1>
    <div class="content">
      <div class="image-container">
        <div class="poster" v-for="image in images" :key="image">
          <img :src="image.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      images:[
        {
          img: require("../assets/image/poster1.jpg"),
        },
        {
          img: require("../assets/image/poster2.jpg"),
        },
        {
          img: require("../assets/image/poster3.jpg"),
        },
        {
          img: require("../assets/image/poster4.jpg"),
        },
        ]
    }
  }
}
</script>

<style scoped>
  .wrap{
    color: #fff;
  }
  h1{
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 2.25rem;
  }
  .image-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .poster>img{
    width: 190px;
    height: 280px;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>