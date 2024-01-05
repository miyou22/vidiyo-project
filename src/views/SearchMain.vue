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
        <swiper-slide class="s1 textSwiper" v-for="item in items" :key="item">
          <div class="onlyImage">
            <img :src="item.img" @click="$router.push('/detail')"/>
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
            spaceBetween: 40,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper textSwiper"
      >
        <swiper-slide v-for="cate in categori" :key="cate">
          <div class="img-list">
            <img :src="cate.img" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">{{cate.p}}</p>
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
            spaceBetween: 40,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper textSwiper"
      >
        <swiper-slide v-for="cate2 in categori2" :key="cate2">
          <div class="img-list">
            <img :src="cate2.img" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">{{cate2.p}}</p>
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
        :navigation="true"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '1024': {
            slidesPerView: 4,
            spaceBetween: 14,
            slidesPerGroup: 4,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 14,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_korea.png" class="ct-image r5" />
            <div class="text-box">
              <p class="ct-text">한국</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_usa.png" class="ct-image r8" />
            <div class="text-box">
              <p class="ct-text">미국</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_taguk.png" class="ct-image r4" />
            <div class="text-box">
              <p class="ct-text">태국</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_japan.png" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">일본</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_china.png" class="ct-image r10" />
            <div class="text-box">
              <p class="ct-text">중국</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_uk.png" class="ct-image r6" />
            <div class="text-box">
              <p class="ct-text">영국</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_indo.png" class="ct-image r7" />
            <div class="text-box">
              <p class="ct-text">인도</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img
              src="../assets/image/search_hongkong.png"
              class="ct-image r2"
            />
            <div class="text-box">
              <p class="ct-text">홍콩</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_mongol.png" class="ct-image r9" />
            <div class="text-box">
              <p class="ct-text">몽골</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_romance.png" class="ct-image r2" />
            <div class="text-box">
              <p class="ct-text">아프리카</p>
            </div>
          </div>
        </swiper-slide>
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
        :navigation="true"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '1024': {
            slidesPerView: 4,
            spaceBetween: 14,
            slidesPerGroup: 4,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 14,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_slil.png" class="ct-image r4" />
            <div class="text-box">
              <p class="ct-text">스릴러</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_life.png" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">생존, 재난</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_fanta.png" class="ct-image r3" />
            <div class="text-box">
              <p class="ct-text">판타지</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_lovely.png" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">귀여운, 사랑스러운</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img
              src="../assets/image/search_romance.png"
              class="ct-image r10"
            />
            <div class="text-box">
              <p class="ct-text">로맨스</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_uk.png" class="ct-image r6" />
            <div class="text-box">
              <p class="ct-text">영국</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_indo.png" class="ct-image r7" />
            <div class="text-box">
              <p class="ct-text">인도</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_japan.png" class="ct-image r3" />
            <div class="text-box">
              <p class="ct-text">일본</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_mongol.png" class="ct-image r5" />
            <div class="text-box">
              <p class="ct-text">몽골</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_murder.png" class="ct-image r4" />
            <div class="text-box">
              <p class="ct-text">살인, 복수</p>
            </div>
          </div>
        </swiper-slide>
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
      ]
    }
  }
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

.r1 {
  background: rgb(21, 95, 83);
}
.r2 {
  background: rgb(85, 40, 209);
}
.r3 {
  background: rgb(68, 110, 103);
}
.r4 {
  background: rgb(141, 30, 30);
}
.r5 {
  background: rgb(5, 49, 42);
}
.r6 {
  background: rgb(39, 85, 99);
}
.r7 {
  background: rgb(78, 77, 16);
}
.r8 {
  background: rgb(0, 108, 158);
}
.r9 {
  background: rgb(114, 7, 109);
}
.r10 {
  background: rgb(124, 111, 51);
}

.play {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 20%;
  top: 30%;
  display: none;
}

.img {
  position: relative;
}
.c1:hover .play {
  display: block;
}
.c2:hover .play {
  display: block;
}
.c3:hover .play {
  display: block;
}

.prevArrow {
  position: absolute;
  left: -40px;
  display: block;
  color: red;
}
.nextArrow {
  position: absolute;
  right: -40px;
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
</style>
