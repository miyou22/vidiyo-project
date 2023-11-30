<template>
  <div id='warp'>
    <div class="icon">
      <img src="" alt="">
    </div>
    <div class="menu">
      <ul class="gnb">
        <li><router-link to=""><img src="../assets/image/home.png" alt="">홈</router-link></li>
        <li><router-link to=""><img src="../assets/image/star_border.png" alt="">평가</router-link></li>
        <li><router-link to=""><img src="../assets/image/search.png" alt="">검색</router-link></li>
        <li><router-link to=""><img src="../assets/image/box.png" alt="">보관함</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #warp{
    background-color: var(--sub-color2);
    color: var(--text-color3);
    width: 240px;
    height: 1000px;
    position: fixed;
    left: 0;
    top: 0;
  }
  .icon{
    height: 56px;
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