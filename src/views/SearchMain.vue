<template>
  <div class="wrap">
    <div class="search-list">
      <div class="first">
        <h1>최근 검색한 항목</h1>
        <a href="#" class="btnClear">모두 삭제</a>
      </div>
      <div class="row">
        <div class="col c1" @click="$router.push('/detail')">
          <div class="img">
            <img src="../assets/image/Group5.png" />
            <img src="../assets/image/playbt.png" class="play" />
          </div>
          <div class="txt">
            <h2>이프온리</h2>
            <p>영화 • 길정거 • 2004</p>
          </div>
        </div>
        <div class="col c2">
          <div class="img">
            <img src="../assets/image/searchlist.png" />
            <img src="../assets/image/playbt.png" class="play" />
          </div>
          <div class="txt">
            <h2>악마를 보았다</h2>
            <p>영화 • 김지훈 • 2010</p>
          </div>
        </div>
        <div class="col c3">
          <div class="img">
            <img src="../assets/image/searchlist.png" />
            <img src="../assets/image/playbt.png" class="play" />
          </div>
          <div class="txt">
            <h2>악마를 보았다</h2>
            <p>영화 • 김지훈 • 2010</p>
          </div>
        </div>
      </div>
    </div>

    <div class="categori one">
      <div class="first">
        <h1>인기</h1>
        <a href="#" class="btnClear">모두 보기</a>
      </div>
      <swiper
        ref="{swiperRef}"
        :slidesPerView="2"
        :slidesPerGroup="2"
        :centeredSlides="false"
        :spaceBetween="40"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :loopAdditionalSlides= "1" 
        :breakpoints="{
          '1024': {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 4,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 40,
            slidesPerGroup: 5,
          },
          '1424': {
            slidesPerView: 6,
            spaceBetween: 40,
            slidesPerGroup: 6,
          },
          '1680': {
            slidesPerView: 7,
            spaceBetween: 40,
            slidesPerGroup: 7,
          },
        }"
        class="mySwiper textSwiper"
      >
        <swiper-slide class="s1 textSwiper" v-for="items in shuffledImages" :key="items">
          <div class="onlyImage">
            <img :src="items.img" @click="$router.push('/detail')"/>
        </div>
        </swiper-slide>
        <div class="swiper-button-prev prevArrow navi"></div>
      <div class="swiper-button-next nextArrow navi"></div>
      </swiper>
    </div>

    <div class="categori tw">
      <div class="first">
        <h1>비디오 장르</h1>
        <a href="#" class="btnClear">모두 보기</a>
      </div>

      <swiper
        ref="{swiperRef}"
        :slidesPerView="2"
        :slidesPerGroup="2"
        :centeredSlides="false"
        :spaceBetween="40"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '1024': {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 4,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 45,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper textSwiper"
      >
        <swiper-slide v-for="categori in shuffledImages1" :key="categori">
          <div class="img-list">
            <img :src="categori.img" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">{{categori.p}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev prevArrow navi"></div>
      <div class="swiper-button-next nextArrow navi"></div>
      </swiper>
    </div>

    <div class="categori tw">
      <div class="first">
        <h1>비디오 태그</h1>
        <a href="#" class="btnClear">모두 보기</a>
      </div>

      <swiper
        ref="{swiperRef}"
        :slidesPerView="2"
        :slidesPerGroup="2"
        :centeredSlides="false"
        :spaceBetween="40"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '1024': {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 4,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 45,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper textSwiper"
      >
        <swiper-slide v-for="categori2 in shuffledImages2" :key="categori2">
          <div class="img-list">
            <img :src="categori2.img" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">{{categori2.p}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev prevArrow navi"></div>
      <div class="swiper-button-next nextArrow navi"></div>
      </swiper>
    </div>

    <div class="categori tw">
      <div class="first">
        <h1>비디오 국가</h1>
        <a href="#" class="btnClear">모두 보기</a>
      </div>
      <swiper
        ref="{swiperRef}"
        :slidesPerView="2"
        :slidesPerGroup="2"
        :centeredSlides="false"
        :spaceBetween="14"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '1024': {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 4,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 40,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper textSwiper"
      >
      <swiper-slide v-for="categori3 in shuffledImages3" :key="categori3">
          <div class="img-list">
            <img :src="categori3.img" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">{{categori3.p}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev prevArrow navi"></div>
      <div class="swiper-button-next nextArrow navi"></div>
      </swiper>
    </div>

    <div class="categori tw">
      <div class="first">
        <h1>오늘의 추천</h1>
        <a href="#" class="btnClear">모두 보기</a>
      </div>
      <swiper
        ref="{swiperRef}"
        :slidesPerView="2"
        :slidesPerGroup="2"
        :centeredSlides="false"
        :spaceBetween="14"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '1024': {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 4,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 45,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper textSwiper"
      >
      <swiper-slide v-for="images in shuffledImages4" :key="images">
          <div class="img-list">
            <img :src="images.img" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">{{images.p}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev prevArrow navi"></div>
      <div class="swiper-button-next nextArrow navi"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import "../assets/css/root.css";

// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation]
    };
  },
  data(){
    return{
      items: [
      {
          img: require('../assets/image/popular.jpg')
        },
        {
          img: require('../assets/image/popular1.jpg')
        },
        {
          img: require('../assets/image/popular2.jpg')
        },
        {
          img: require('../assets/image/popular3.jpg')
        },
        {
          img: require('../assets/image/popular4.jpg')
        },
        {
          img: require('../assets/image/popular5.jpg')
        },
        {
          img: require('../assets/image/popular6.jpg')
        },
        {
          img: require('../assets/image/popular7.jpg')
        },
        {
          img: require('../assets/image/popular8.jpg')
        },
        {
          img: require('../assets/image/popular9.jpg')
        },
      ],
      categori:[
        {
          img: require('../assets/image/s_comedy.png'),
          p:'코미디'
        },
        {
          img: require('../assets/image/s_sidae.png'),
          p:'시대극'
        },
        {
          img: require('../assets/image/s_churi.png'),
          p:'추리'
        },
        {
          img: require('../assets/image/s_family.png'),
          p:'가족, 힐링'
        },
        {
          img: require('../assets/image/s_beom.png'),
          p:'범죄'
        },
        {
          img: require('../assets/image/s_horor.png'),
          p:'공포'
        },
        {
          img: require('../assets/image/s_korea.png'),
          p:'한국영화'
        },
        {
          img: require('../assets/image/s_slil.png'),
          p:'스릴러'
        },
        {
          img: require('../assets/image/s_romance.png'),
          p:'로맨스'
        },
        {
          img: require('../assets/image/s_fanta.png'),
          p:'판타지'
        },
      ],
      categori2:[
        {
          img:require('../assets/image/s_music.png'),
          p:'음악, 예능'
        },
        {
          img:require('../assets/image/s_lovely.png'),
          p:'귀여운, 사랑스러운'
        },
        {
          img:require('../assets/image/s_family.png'),
          p:'가족, 힐링'
        },
        {
          img:require('../assets/image/s_fun.png'),
          p:'웃긴, 연인'
        },
        {
          img:require('../assets/image/s_hero.png'),
          p:'슈퍼히어로'
        },
        {
          img:require('../assets/image/s_life.png'),
          p:'생존, 재난'
        },
        {
          img:require('../assets/image/s_smart.png'),
          p:'재능, 천재'
        },
        {
          img:require('../assets/image/s_sf.png'),
          p:'SF'
        },
        {
          img:require('../assets/image/s_war.png'),
          p:'전쟁'
        },
        {
          img:require('../assets/image/s_murder.png'),
          p:'살인, 복수'
        },
      ],
      categori3:[
        {
          img: require('../assets/image/s_korea.png'),
          p:'한국'
        },
        {
          img: require('../assets/image/s_usa.png'),
          p:'미국'
        },
        {
          img: require('../assets/image/s_taguk.png'),
          p:'태국'
        },
        {
          img: require('../assets/image/s_japan.png'),
          p:'일본'
        },
        {
          img: require('../assets/image/s_china.png'),
          p:'중국'
        },
        {
          img: require('../assets/image/s_uk.png'),
          p:'영국'
        },
        {
          img: require('../assets/image/s_indo.png'),
          p:'인도'
        },
        {
          img: require('../assets/image/s_germ.png'),
          p:'독일'
        },
        {
          img: require('../assets/image/s_mongol.png'),
          p:'몽골'
        },
        {
          img: require('../assets/image/s_africa.png'),
          p:'아프리카'
        },
      ],
      images:[
      {
          img:require('../assets/image/s_music.png'),
          p:'음악, 예능'
        },
        {
          img:require('../assets/image/s_lovely.png'),
          p:'귀여운, 사랑스러운'
        },
        {
          img:require('../assets/image/s_family.png'),
          p:'가족, 힐링'
        },
        {
          img:require('../assets/image/s_fun.png'),
          p:'웃긴, 연인'
        },
        {
          img:require('../assets/image/s_hero.png'),
          p:'슈퍼히어로'
        },
        {
          img:require('../assets/image/s_life.png'),
          p:'생존, 재난'
        },
        {
          img:require('../assets/image/s_smart.png'),
          p:'재능, 천재'
        },
        {
          img:require('../assets/image/s_sf.png'),
          p:'SF'
        },
        {
          img:require('../assets/image/s_war.png'),
          p:'전쟁'
        },
        {
          img:require('../assets/image/s_murder.png'),
          p:'살인, 복수'
        },
      {
          img: require('../assets/image/s_comedy.png'),
          p:'코미디'
        },
        {
          img: require('../assets/image/s_sidae.png'),
          p:'시대극'
        },
        {
          img: require('../assets/image/s_churi.png'),
          p:'추리'
        },
        {
          img: require('../assets/image/s_family.png'),
          p:'가족, 힐링'
        },
        {
          img: require('../assets/image/s_beom.png'),
          p:'범죄'
        },
        {
          img: require('../assets/image/s_horor.png'),
          p:'공포'
        },
        {
          img: require('../assets/image/s_korea.png'),
          p:'한국영화'
        },
        {
          img: require('../assets/image/s_slil.png'),
          p:'스릴러'
        },
        {
          img: require('../assets/image/s_romance.png'),
          p:'로맨스'
        },
        {
          img: require('../assets/image/s_fanta.png'),
          p:'판타지'
        },
      {
          img: require('../assets/image/s_korea.png'),
          p:'한국'
        },
        {
          img: require('../assets/image/s_usa.png'),
          p:'미국'
        },
        {
          img: require('../assets/image/s_taguk.png'),
          p:'태국'
        },
        {
          img: require('../assets/image/s_japan.png'),
          p:'일본'
        },
        {
          img: require('../assets/image/s_china.png'),
          p:'중국'
        },
        {
          img: require('../assets/image/s_uk.png'),
          p:'영국'
        },
        {
          img: require('../assets/image/s_indo.png'),
          p:'인도'
        },
        {
          img: require('../assets/image/s_germ.png'),
          p:'독일'
        },
        {
          img: require('../assets/image/s_mongol.png'),
          p:'몽골'
        },
        {
          img: require('../assets/image/s_africa.png'),
          p:'아프리카'
        },
      ]
    }
  },
  computed: {
    shuffledImages() {
      // Copy the original images array to avoid modifying it directly
      const imagesCopy = [...this.items];
      
      // Shuffle the copied array
      for (let i = imagesCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesCopy[i], imagesCopy[j]] = [imagesCopy[j], imagesCopy[i]];
      }
      
      return imagesCopy;
    },
    shuffledImages1() {
      // Copy the original images array to avoid modifying it directly
      const imagesCopy1 = [...this.categori];
      
      // Shuffle the copied array
      for (let i = imagesCopy1.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesCopy1[i], imagesCopy1[j]] = [imagesCopy1[j], imagesCopy1[i]];
      }
      
      return imagesCopy1;
    },
    shuffledImages2() {
      // Copy the original images array to avoid modifying it directly
      const imagesCopy2 = [...this.categori2];

      // Shuffle the copied array
      for (let i = imagesCopy2.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesCopy2[i], imagesCopy2[j]] = [imagesCopy2[j], imagesCopy2[i]];
      }
      
      return imagesCopy2;
    },
    shuffledImages3() {
      // Copy the original images array to avoid modifying it directly
      const imagesCopy3 = [...this.categori3];
      
      // Shuffle the copied array
      for (let i = imagesCopy3.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesCopy3[i], imagesCopy3[j]] = [imagesCopy3[j], imagesCopy3[i]];
      }
      
      return imagesCopy3;
    },
    shuffledImages4() {
      // Copy the original images array to avoid modifying it directly
      const imagesCopy = [...this.images];
  
      // Shuffle the copied array
      for (let i = imagesCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesCopy[i], imagesCopy[j]] = [imagesCopy[j], imagesCopy[i]];
      }
  
      return imagesCopy;
    },
  },

};
</script>

<style scoped>
.wrap {
  padding: 56px 40px 0;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.swiper {
  width: 100%;
  margin-top: 18px;
}

.categori h1 {
  font-size: 28px;
  color: white;
  font-weight: bold;
  font-family: "Noto sans KR";
}

.tw {
  margin-top: 40px;
}

.col {
  background-color: #363636;
  padding: 10px 8px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  height: 86px;
  overflow: hidden;
  margin: 0 10px;
  cursor: pointer;
}

.c2 {
  margin: 0 12px;
}
.search-list h1 {
  font-size: 28px;
  color: white;
  font-weight: bold;
  font-family: "Noto sans KR";
}
.search-list {
  margin-bottom: 62px;
}

.txt {
  width: 100%;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 12px;
  font-family: "Noto sans KR";
}
.txt > h2 {
  font-size: var(--size4);
  margin-top: 12px;
  margin-bottom: 8px;
  font-weight: 600;
}
.txt > p {
  font-size: var(--size5);
}
.first {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.first a {
  font-size: var(--size4);
  font-family: "Noto sans KR";
  color: #202020;
}
/* @media screen and (min-width: 0) and (max-width: 568px) {
} */

.ct-image {
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: scale(1.01);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-box {
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 8px;
}
.ct-text {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  text-align: left;
  font-family: "Noto sans KR";
}

.img-list {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 56.27% 0px 0px;
  border-radius: 4px;
}



.play {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 20%;
  top: 30%;
  opacity: 0;
  transition: all 0.3s;
}

.img {
  position: relative;
}
.c1:hover .play {
  opacity: 1;
}
.c2:hover .play {
  opacity: 1;
}
.c3:hover .play {
  opacity: 1;
}

.prevArrow {
  position: absolute;
  left: -35px;
  display: block;
  color: red;
}
.nextArrow {
  position: absolute;
  right: -35px;
  display: block;
  color: red;
}

.one {
  width: 100%;
  margin: 40px 0;
  padding: 0 -40px 0 -40px;
  box-sizing: border-box;
}
.textSwiper{
    position: relative;
    overflow: visible;
  }
.swiper {
  width: 100%;
  margin: 20px auto;
}
.onlyImage{
  border-radius: 2%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.ct-image{
  width: 100%;
}
.img-list,.onlyImage{
  cursor: pointer;
  opacity: 0.9;
}
.img-list:hover,.onlyImage:hover
{opacity: 1;}
</style>
