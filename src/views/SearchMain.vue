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
          </div>
          <div class="txt">
            <h2>이프온리</h2>
            <p>영화 • 길정거 • 2004</p>
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
        <div class="col c3">
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
      <div class="first">
        <h1>인기</h1>
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
          '1424': {
            slidesPerView: 6,
            spaceBetween: 14,
            slidesPerGroup: 6,
          },
          '1680': {
            slidesPerView: 7,
            spaceBetween: 14,
            slidesPerGroup: 7,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide class="s1">
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
      <div class="first">
        <h1>비디오 장르</h1>
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
            <img src="../assets/image/search_comedy.png" class="ct-image r1" />
            <div class="text-box">
              <p class="ct-text">코미디</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_korea.png" class="ct-image r2" />
            <div class="text-box">
              <p class="ct-text">한국 영화</p>
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
            <img src="../assets/image/search_slil.png" class="ct-image r4" />
            <div class="text-box">
              <p class="ct-text">스릴러</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_horor.png" class="ct-image r5" />
            <div class="text-box">
              <p class="ct-text">공포</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_beom.png" class="ct-image r6" />
            <div class="text-box">
              <p class="ct-text">범죄</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_sidae.png" class="ct-image r7"/>
            <div class="text-box">
              <p class="ct-text">시대극</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_churi.png" class="ct-image r8" />
            <div class="text-box">
              <p class="ct-text">추리</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_action.png" class="ct-image r9"/>
            <div class="text-box">
              <p class="ct-text">액션</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_romance.png" class="ct-image r10" />
            <div class="text-box">
              <p class="ct-text">로맨스</p>
            </div>
          </div>
        </swiper-slide>
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
            <img src="../assets/image/search_music.png" class="ct-image r10" />
            <div class="text-box">
              <p class="ct-text">음악, 예능</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_lovely.png" class="ct-image r9" />
            <div class="text-box">
              <p class="ct-text">귀여운, 사랑스러운</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_family.png" class="ct-image r8" />
            <div class="text-box">
              <p class="ct-text">가족, 힐링</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_fun.png" class="ct-image r7" />
            <div class="text-box">
              <p class="ct-text">웃긴, 연인</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_hero.png" class="ct-image r6" />
            <div class="text-box">
              <p class="ct-text">슈퍼히어로</p>
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
            <img src="../assets/image/search_smart.png" class="ct-image r2"/>
            <div class="text-box">
              <p class="ct-text">재능, 천재</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_sf.png" class="ct-image r3" />
            <div class="text-box">
              <p class="ct-text">SF</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_war.png" class="ct-image r5"/>
            <div class="text-box">
              <p class="ct-text">전쟁</p>
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
            <img src="../assets/image/search_indo.png" class="ct-image r7"/>
            <div class="text-box">
              <p class="ct-text">인도</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_hongkong.png" class="ct-image r2" />
            <div class="text-box">
              <p class="ct-text">홍콩</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_mongol.png" class="ct-image r9"/>
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
            <img src="../assets/image/search_romance.png" class="ct-image r10" />
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
            <img src="../assets/image/search_indo.png" class="ct-image r7"/>
            <div class="text-box">
              <p class="ct-text">인도</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_lovely.png" class="ct-image r3" />
            <div class="text-box">
              <p class="ct-text">일본</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img-list">
            <img src="../assets/image/search_mongol.png" class="ct-image r5"/>
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
      modules: [Navigation],
    };
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
  font-family: 'Noto sans KR';
}

.img-list {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 56.27% 0px 0px;
  border-radius: 4px;
}

.r1{background:rgb(21, 95, 83);}
.r2{background:rgb(85, 40, 209);}
.r3{background:rgb(68, 110, 103);}
.r4{background:rgb(141, 30, 30);}
.r5{ background:rgb(5, 49, 42);}
.r6{ background:rgb(39, 85, 99);}
.r7{ background:rgb(78, 77, 16);}
.r8{ background:rgb(0, 108, 158);}
.r9{ background:rgb(114, 7, 109);}
.r10{ background:rgb(124, 111, 51);}
</style>
