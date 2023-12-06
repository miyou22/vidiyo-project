<template>
  <div id='warp'>
    <a class="icon">
      <img src="../assets/image/vidiyo logo 5.png" alt="">
    </a>
    <div class="menu">
      <ul class="gnb">
        <li><a href="#"><img src="../assets/image/home.png" alt="">홈</a></li>
        <li><a href="#"><img src="../assets/image/star_border.png" alt="">평가</a></li>
        <li><a href="#"><img src="../assets/image/search.png" alt="">검색</a></li>
        <li><a href="#"><img src="../assets/image/box.png" alt="">보관함</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #warp{
    background-color: var(--sub-color2);
    color: var(--text-color3);
    width: 240px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    box-sizing: border-box;
    /* z-index: 501; */
  }
  .icon{
    display: block;
    margin: 24px 0 0 26px;
  }
  .icon img{

  }
  .gnb{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
    margin-top: 3.375rem;
  }
  .gnb > li{
    display: flex;
    align-items: center;
    padding: 0.75rem 0;
  }
  li > a >img{
    margin-right: 1rem;

  }


  
</style>