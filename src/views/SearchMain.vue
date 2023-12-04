<template>
  <main>
    <swiper
      ref="{swiperRef}"
      :slidesPerView="7"
      :centeredSlides="true"
      :spaceBetween="10"
      :navigation="true"
      :loop="true"
      :modules="modules"
      :slidesOffsetBefore="10"
      :autoHeight="true"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="../assets/image/mm1.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/mm2.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/mm3.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/mm4.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/mm5.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/mm6.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/mm7.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/mm8.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/mm9.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/image/mm10.jpg" />
      </swiper-slide>
    </swiper>
    <App-Footer />
  </main>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import AppFooter from "../components/AppFooter.vue";

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
    AppFooter,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
main {
  width: 100%;
  background-color: var(--main-color1);
  height: 100%;
  margin-top: 56px;
  user-select: none;
  padding: 68px 0;
  padding-left: 240px;
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
}

.swiper-slide img {
  display: block;
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
.swiper-button-prev::after {
  width: 10px;
  height: 10px;
}
</style>