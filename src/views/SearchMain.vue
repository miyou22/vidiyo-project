<template>
  <main>
    <div class="search-list">
      <h1>최근 검색한 항목</h1>

        <div class="row">
          <div class="col">
            <div class="img">
              <img src="../assets/image/searchlist.png" />
            </div>
            <div class="txt">
              <h2>악마를 보았다</h2>
              <p>영화 • 김지훈 • 2010</p>
            </div>
          </div>
          <div class="col c2">
            <div class="img">
              <img src="../assets/image/searchlist.png" />
            </div>
            <div class="txt">
              <h2>악마를 보았다</h2>
              <p>영화 • 김지훈 • 2010</p>
            </div>
          </div>
          <div class="col">
            <div class="img">
              <img src="../assets/image/searchlist.png" />
            </div>
            <div class="txt">
              <h2>악마를 보았다</h2>
              <p>영화 • 김지훈 • 2010</p>
            </div>
          </div>
        </div>
      
    </div>

    <div class="categori">
      <h1>인기</h1>
      <swiper
        ref="{swiperRef}"
        :centeredSlides="false"
        :spaceBetween="14"
        :navigation="true"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '568': {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 2,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 35,
            slidesPerGroup: 4,
          },
          '1680': {
            slidesPerView: 7,
            spaceBetween: 14,
            slidesPerGroup: 7,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/image/categori1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular7.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/popular1.jpg" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="categori tw">
      <h1>비디오 장르</h1>
      <swiper
        ref="{swiperRef}"
        :centeredSlides="false"
        :spaceBetween="14"
        :navigation="true"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '568': {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 2,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 32,
            slidesPerGroup: 4,
          },
          '1680': {
            slidesPerView: 5,
            spaceBetween: 12,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa.png" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="categori tw">
      <h1>비디오 태그</h1>
      <swiper
        ref="{swiperRef}"
        :centeredSlides="false"
        :spaceBetween="14"
        :navigation="true"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '568': {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 2,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 32,
            slidesPerGroup: 4,
          },
          '1680': {
            slidesPerView: 5,
            spaceBetween: 12,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa1.png" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="categori tw">
      <h1>비디오 국가</h1>
      <swiper
        ref="{swiperRef}"
        :centeredSlides="false"
        :spaceBetween="14"
        :navigation="true"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '568': {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 2,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 32,
            slidesPerGroup: 4,
          },
          '1680': {
            slidesPerView: 5,
            spaceBetween: 12,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="categori tw">
      <h1>오늘의 추천</h1>
      <swiper
        ref="{swiperRef}"
        :centeredSlides="false"
        :spaceBetween="14"
        :navigation="true"
        :loop="true"
        :modules="modules"
        :autoHeight="true"
        :breakpoints="{
          '568': {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 2,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 32,
            slidesPerGroup: 4,
          },
          '1680': {
            slidesPerView: 5,
            spaceBetween: 12,
            slidesPerGroup: 5,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/aa2.png" />
        </swiper-slide>
      </swiper>
    </div>
  </main>
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
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>




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

.categori > h1 {
  font-size: 28px;
  color: white;
  font-weight: bold;
  font-family: Inter;
}
.categori {
  padding: 0 40px;
  box-sizing: border-box;
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
}

.c2 {
  margin: 0 12px;
}
.search-list > h1 {
  font-size: 28px;
  color: white;
  font-weight: bold;
  font-family: Inter;
  margin-bottom: 18px;
}
.search-list {
  padding: 0 40px;
  margin-bottom: 62px;
}

.txt{
  color: white;
}
.txt>h2{
  font-size: 16px;
  font-family: Roboto;

}
</style>