<template>
 <div class="wrap">
  <div class="homeTitle">
    <h2>홈</h2>
  </div>

  <section id="section1">
    <a href="#" class="imageLink"> 
    <div class="movieTitle">
      <div class="movieImage">
        <div class="image"></div>
        <!-- <div class="video">
            <video src="../assets/image/leave.mp4" autoplay loop muted height="520" id="video10"></video>
        </div> -->
      </div>
      <div class="movieText">
        <div class="bgi"></div>
        <p>"나는요...완전히 붕괴되었어요"</p>                                                                         
        <p>당신의 고백을 들은 순간, 내 사랑이 시작되었어요</p>
      </div>
    </div>
  </a>
  </section>
  

  <hr type="regular">

  <section id="section2">
    <div class="gnb">
      <swiper
      ref="{swiperRef}"
      :slidesPerView="3"
      :centeredSlides="true"
      :spaceBetween="10"
      :navigation="{nextEl: '.nextArrow', prevEl: '.prevArrow'}"
      :loop="true"
      :modules="modules"
      :autoHeight="true"
      :loopAdditionalSlides= "1" 

      class="mySwiper textSwiper"
      >
        <swiper-slide v-for="item in items" :key="item">
          <div class="allFor textSwiper">
            <div class="textGroup">
              <a href="#">
                <span>{{ item.span }}</span>
                <h2>{{ item.h2 }}</h2>
                <p>{{ item.p }}</p> 
              </a>
            </div>
            <figure>
             
              <img :src="item.img" />
 
            </figure>
          </div>
        </swiper-slide>
         <div class="swiper-button-prev prevArrow navi"></div>
         <div class="swiper-button-next nextArrow navi"></div>
      </swiper>
     
    </div>
  </section>

  <hr type="regular">

  <section id="section3">
    <div class="tagGnb">
      <div class="onlyTxt">
        <h2>직장인에게 방학따위 없엉 힝</h2>
        <a href="#">더보기</a>
      </div>
      <swiper
        ref="{swiperRef}"
        :slidesPerView="8"
        :spaceBetween="10"
        :slidesPerGroup="8"
        :centeredSlides="false"
        :navigation="{nextEl: '.nextImgArrow', prevEl: '.prevImgArrow'}"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        class="mySwiper imgSwiper"
      >

      <swiper-slide v-for="image in category" :key="image" class="about">
        <div class="onlyImage">
            <img :src="image.img" @click="$router.push('/detail')"/>
        </div>
      </swiper-slide>
         <div class="swiper-button-prev prevImgArrow naviImg"></div>
         <div class="swiper-button-next nextImgArrow naviImg"></div>
      </swiper>
    </div>
  </section> 

  <section id="section4">
    <div class="tagGnb">
      <div class="onlyTxt">
        <h2>직장인에게 방학따위 없엉 힝</h2>
        <a href="#">더보기</a>
      </div>
      <swiper
        ref="{swiperRef}"
        :slidesPerView="8"
        :spaceBetween="10"
        :slidesPerGroup="8"
        :centeredSlides="false"
        :navigation="{nextEl: '.nextImgArrow', prevEl: '.prevImgArrow'}"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        class="mySwiper imgSwiper"
      >

      <swiper-slide v-for="image in category" :key="image" class="about">
        <div class="onlyImage">
            <img :src="image.img" @click="$router.push('/detail')"/>
        </div>
      </swiper-slide>
         <div class="swiper-button-prev prevImgArrow naviImg"></div>
         <div class="swiper-button-next nextImgArrow naviImg"></div>
      </swiper>
    </div>
  </section> 

 <!-- <section id="section4">
    <div class="tagGnb">
      <div class="onlyTxt">
        <h2>직장인에게 방학따위 없엉 힝</h2>
        <a href="#">더보기</a>
      </div>
      <swiper
        ref="{swiperRef}"
        :slidesPerView="1"
        :centeredSlides="false"
        :navigation="true"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        class="mySwiper"
         :breakpoints="{
           '568': {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 4,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 4,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerGroup: 5,
          },
          '1424': {
            slidesPerView: 6,
            spaceBetween: 10,
            slidesPerGroup: 6,
          },
          '1680': {
            slidesPerView: 8,
            spaceBetween: 10,
            slidesPerGroup: 8,

          },
        }"
      >
      <swiper-slide v-for="image in category" :key="image" class="about">
        <div class="onlyImage">
            <img :src="image.img" @click="$router.push('/detail')"/>
        </div>
      </swiper-slide>
      </swiper>
    </div>
  </section>  -->


  <section id="section5">
    <div class="perGnb">
      <div class="onlyTxt">
        <h2>아티스트</h2>
      </div>
      <swiper
        ref="{swiperRef}"
        :slidesPerView="8"
        :centeredSlides="false"
        :navigation="{nextEl: '.nextArrow', prevEl: '.prevArrow'}"
        :loop="true"
        :modules="modules"
        :spaceBetween="10"
        class="mySwiper textSwiper"
      >
      <swiper-slide v-for="personImg in person" :key="personImg" class="about">
        <div class="personImage" @click="$router.push('/movie')">
          <div class="personImg">
             <img :src="personImg.img" />
          </div>
            <h4>{{ personImg.name }}</h4>
            <p>{{ personImg.movie }}</p>
        </div>
      </swiper-slide>
               <div class="swiper-button-prev prevArrow naviArt"></div>
         <div class="swiper-button-next nextArrow naviArt"></div>
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
      ],
      category: [
        {
          img: require('../assets/image/Rectangle49.png'),
        },
        {
          img: require('../assets/image/Rectangle90.png'),
        },
        {
          img: require('../assets/image/Rectangle511.png'),
        },
        {
          img: require('../assets/image/Rectangle512.png'),
        },
        {
          img: require('../assets/image/Rectangle513.png'),
        },
        {
          img: require('../assets/image/Rectangle514.png'),
        },
        {
          img: require('../assets/image/Rectangle515.png'),
        },
        {
          img: require('../assets/image/Rectangle516.png'),
        },
        {
          img: require('../assets/image/Rectangle517.png'),
        },
        {
          img: require('../assets/image/Rectangle518.png'),
        },
      ],
      person: [
        {
          img: require('../assets/image/person1.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person2.jpg'),
          name: '이병현',
          movie: '미스터 선샤인',
        },
        {
          img: require('../assets/image/person3.jpg'),
          name: '이와이 슌지',
          movie: '러브레터',
        },
        {
          img: require('../assets/image/person4.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person5.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person6.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person7.jpg'),
          name: '신카이 마코토',
          movie: '시간을 달리는 소녀',
        },
        {
          img: require('../assets/image/person8.jpg'),
          name: '한효주',
          movie: '시간을 달리는 소녀',
        },
        {
          img: require('../assets/image/person9.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person10.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
      ],
    }
  }
};
</script>


<style scoped>
*{
    font-family: "Noto Sans KR", sans-serif;
}
.wrap{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 56px 40px 0;
}

h2{
  color: var(--text-color3);
  display: block;
  margin-bottom: 20px;
  font-weight: 900;
}

hr{
  width: 100%;
  height: 1px;
  padding: 0;
  margin: 1rem 0;
  color: #eee;
}

.movieTitle{
  margin-top: -10px;
  position: relative;
  width: calc(100% + 80px);
  margin-left: -40px;
  position: relative;
  aspect-ratio: 3.6 / 1.15;
}

.movieTitle:hover .video{
  display: block;
}

.movieTitle:hover .movieText{
  display: none;
}

.video{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: none;
}

video{
  width: 100%;
  object-fit: cover;
}
.movieImage{
  position: absolute;
  bottom: 0;
  left: 0;
  aspect-ratio: 16 / 5;
  width: 100%;
}
.image{
  background: url(../assets/image/image18.png) center center/cover;
  width: 100%;
  height: 100%;
  position: relative;
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

.movieText p{
  font-size: var(--size7);
  white-space: pre-wrap;
  letter-spacing: 0;
  line-height: 1;
}
.bgi{
  background: url(../assets/image/fontImage.png) left bottom / contain no-repeat;
  z-index: 1;
  width: 70%;
  height: 160px;
}
  /* section1 종료 */


#section2{
  width: 100%;
  margin: 40px 0;
  box-sizing: border-box;
}
.allFor:hover > figure{
  opacity: 0.6;
}

.textGroup{
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 5px;
}

.textGroup span{
  font-size: var(--size5);
  font-weight: bold;
  margin-bottom: 1px;
  color: var( --text-color1);
}

.textGroup h2{
  font-size: var(--size7);
  margin-bottom: 1px;
  font-weight: 900;
}

.textGroup p{
  font-size: var(--size5);
  font-weight:lighter;
  color: var( --text-color1);

}

/* swiper css 수정 */
.mySwiper{
  position: relative;
  overflow: visible;
  width: 100%;
  margin: 20px auto;
}

.mySwiper::before{
  content: '';
  position: absolute;
  left: -40px;
  top: 0;
  width: 40px;
  height: 100%;
  background-color: var(--main-color1);
  z-index: 300;
}

.mySwiper::after{
  content: '';
  position: absolute;
  right: -40px;
  top: 0;
  width: 40px;
  height: 100%;
  background-color: var(--main-color1);
  z-index: 300;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}

/* swiper navigation 수정 */
.prevArrow{
  position: absolute;
  left: -35px;
  display: block;
  color: red;
}

.nextArrow{
  position: absolute;
  right: -35px;
  display: block;
  color: red;
}

.navi{
  position: absolute;
  top: 60%;
  color: red;
  z-index: 400;

}
.naviArt{
  position: absolute;
  top: 40%;
  color: red;
  z-index: 400;
}

/* section2 종료 */

#section3{margin-bottom: 50px;}
#section4{margin-bottom: 50px;}

.onlyTxt h2{
  font-size: var(--size7);
  color: var( --text-color4);
  font-weight: bold;
}
.onlyTxt{
  display: flex;
  justify-content: space-between;
}

.onlyImage{
  border-radius: 2%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.onlyImage:hover{
  opacity: 0.6;
}

/* swiper css  */

.tagGnb > .swiper{
  margin: 5px auto;
}

.imgSwiper{
  position: relative;
  overflow: visible;
}

.imgSwiper::before{
  content: '';
  position: absolute;
  left: -40px;
  top: 0;
  width: 40px;
  height: 100%;
  background-color: var(--main-color1);
  z-index: 300;
}

.imgSwiper::after{
  content: '';
  position: absolute;
  right: -40px;
  top: 0;
  width: 40px;
  height: 100%;
  background-color: var(--main-color1);
  z-index: 300;
}

/* swiper navigation 수정  */


.prevImgArrow{
  position: absolute;
  left: -35px;
  display: block;
  color: red;
}

.nextImgArrow{
  position: absolute;
  right: -35px;
  display: block;
  color: red;
}
.naviImg{
  position: absolute;
  color: red;
  z-index: 400;
}

/* section3,4 종료 */


#section5{}

.personImage{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  cursor: pointer;
}
.personImage:hover > .personImg{
  opacity: 0.6;
}
.personImage > .personImg{
  border-radius: 50%;
  overflow: hidden;
}
.personImg > img{
  width: 100%;
}
.personImage h4{
  font-size: var(--size4);
  color: var(--text-color3);

  padding: 4px 0;
}
.personImage p{
  font-size: var(--size5);
  color: var(--text-color4);
}
.perGnb > .onlyTxt > h2{
  font-size: var(--size7);
  font-weight: bold;
}


/* section5 종료 */


@media (max-width: 1024px){}
@media (max-width: 798px){
  #wrap{
   margin-left: -240px;

  }
}
@media (max-width: 568px){}


</style>