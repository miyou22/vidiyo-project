<template>
 <div id="warp">
  <div class="homeTitle">
    <h2>홈</h2>
  </div>

  <hr type="regular">

  <a href="#" class="imageLink">
    <div class="movieTitle">
      <div class="movieImage">
        <div class="image">
          <img src="../assets/image/image18.png" alt="">
        </div>
        <!-- <div class="video">
          <video src="https://youtu.be/i50tT8n9fp8?si=WXtP5Tnn6felcpv4"></video>
        </div> -->
      </div>
      <div class="movieText">
        <div class="bgi"></div>
        <p>"나는요...완전히 붕괴되었어요"</p>                                                                         
        <p>당신의 고백을 들은 순간, 내 사랑이 시작되었어요</p>
      </div>
    </div>
  </a>


  <section class="contants">
    <div class="gnb">
      <swiper
    ref="{swiperRef}"
    :slidesPerView="3"
    :centeredSlides="true"
    :spaceBetween="10"
    :navigation="true"
    :loop="true"
    :modules="modules"
    :slidesOffsetBefore ="0"
    :autoHeight="true"
    class="mySwiper"
  >
        <swiper-slide v-for="item in items" :key="item">
          <div class="allFor">
            <div class="textGroup">
              <span>{{ item.span }}</span>
              <h2>{{ item.h2 }}</h2>
              <p>{{ item.p }}</p> 
            </div>
            <figure>
              <img :src="item.img" />
            </figure>
          </div>
        </swiper-slide>
    
        <!-- <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure2.png" alt="">
            </figure>
          </div>
        </swiper-slide>
    
        <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure3.png" alt="">
            </figure>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure1.png" alt="">
            </figure>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure1.png" alt="">
            </figure>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure1.png" alt="">
            </figure>
          </div>
        </swiper-slide>
     -->
      
    </swiper>
  </div>
  </section>


</div>
</template>
<!-- <div class="homeTitleImage">
  <img src="../assets/image/image18.png" alt="">
</div> -->

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import '../assets/css/root.css';

// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data(){
    return{
      items: [
        {
          span : 'NEW',
          h2 : '새로 올라온 컨텐츠',
          p : '라방, 본아페티, 그놈들 등',
          img : require('../assets/image/figure1.png'),
        },
        {
          span : '추천영화',
          h2 : '트와일라잇 시리즈',
          p : '얼음보다 차갑고 빛보다 빠른 그들이 온다!', 
          img : require('../assets/image/figure2.png'),
        },
        {
          span : '추천리스트',
          h2 : '죽기전에 봐야 할 명작',
          p : '영화 평론가들이 뽑은 21세기 가장 위대한 명작', 
          img : require('../assets/image/figure3.png')
        },
        {
          span : '추천리스트',
          h2 : '죽기전에 봐야 할 명작',
          p : '영화 평론가들이 뽑은 21세기 가장 위대한 명작', 
          img : require('../assets/image/figure3.png')
        },
      ]
    }
  }
};
</script>

<style scoped>
  #warp{
    width: 100%;
    height: 100%;
  }
  h2{
    color: var(--text-color3);
    display: block;
  }
  hr{
    width: 100%;
    height: 1px;
    padding: 0;
    margin: 1rem 0;
    color: #eee;
  }
  .movieTitle{
    position: relative;
    width: calc(100% + 80px);
    margin-left: -40px;
  }
  .image img{
  }
  .movieText{
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 40px;
    color: white;
    gap: 10px;
    flex-direction: column;
    width: 500px;
  }
  .movieText h1{
  }
  .movieText p{
    font-size: 18px;
    white-space: pre-wrap;
    letter-spacing: 0;
  }
  .bgi{
    background: url(../assets/image/fontImage.png) left bottom / contain no-repeat;
    z-index: 1;
    width: 100%;
    height: 160px;
  }
  .contants{
    width: 100%;
    margin-top: 40px;
  }
  .contants{}
  
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  width: 100%;
}

.swiper {
  width: 100%;
  margin: 20px auto;

}
.append-buttons {
  text-align: center;
  margin-top: 20px;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
}
.swiper-button-prev::after{
  width: 10px;
  height: 10px;
}

.textGroup{
  display: flex;
  flex-direction: column;
  align-items: start;
  color: var(--text-color3);
  margin-bottom: 5px;
}
.textGroup span{
  font-size: var(--size5);
  font-weight: bold;
  margin-bottom: 1px;
}

.textGroup h2{
  font-size: var(--size3);
  margin-bottom: 1px;
}
.textGroup p{
  font-size: var(--size4);
  font-weight:lighter;
}

</style>