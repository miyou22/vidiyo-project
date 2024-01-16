<template>
  <div class="wrap">


    <div class="evalTitle">
      <h2>보관함</h2>
    </div>
    
    <div class="trueView" v-if="login">

    <section id="section1" class="content">
      <div class="subTitle">
        <h2>감상중인 콘텐츠</h2>
      </div>
      <div class="container-fulid">
        <ul class="gnb">
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
             <swiper-slide class="imgGroup" v-for="item in category" :key="item">
              <a href="#">
                <img :src="item.img" class="imgStall" @click="$router.push('/detail')"/>
                <div class="movieName">
                  <p>{{ item.title }}</p>
                </div>
              </a>
            </swiper-slide>
            <div class="swiper-button-prev prevImgArrow naviImg"></div>
            <div class="swiper-button-next nextImgArrow naviImg"></div>
          </swiper>
        </ul>
      </div>
    </section>

              <!-- <div class="texDec">
                <h1>{{ item.title }}</h1>
                <p>{{ item.time }}</p>
                <span>{{ item.tag }}</span>
              </div> -->

    <section id="section2" class="content">
      <div class="subTitle">
        <h2>나의 시청 콘텐츠</h2>
      </div>
      <div class="container-fulid">
        <ul class="gnb">
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
          <swiper-slide class="imgGroup" v-for="item in comment" :key="item">
            <a href="#">
              <img :src="item.img" class="imgStall"  @click="$router.push('/detail')"/>
            </a>
            <div class="movieName">
              <p>{{ item.title }}</p>
            </div>
          </swiper-slide>
            <div class="swiper-button-prev prevImgArrow naviImg"></div>
            <div class="swiper-button-next nextImgArrow naviImg"></div>
          </swiper>
        </ul>
      </div>
    </section>

    <section id="section3" class="comment">
      <div class="commentTitle">
        <h2>보고싶어요 한 콘텐츠</h2>
      </div>
      <div class="container-fulid" v-if="heart.length!==0">
        <ul class="gnb" >
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
          <swiper-slide class="imgGroup" v-for="item in heart" :key="item">
            <img :src="item.img" class="imgStall"  @click="$router.push('/detail')"/>
            <div class="movieName">
              <p>{{ item.title }}</p>
            </div>
          </swiper-slide>
            <div class="swiper-button-prev prevImgArrow naviImg"></div>
            <div class="swiper-button-next nextImgArrow naviImg"></div>
          </swiper>
        </ul>
      </div>
      <div class="container-fulid" v-else>
       <div class="row">
        <div class="col-md-6 offset-md-3 middle">
          <img src="../assets/image/Group111.png">
          <p>보고 싶어요 한 컨텐츠는 여기 보여줘요</p>
        </div>
       </div>
      </div>
    </section>
    </div>

    <div class="falseView" v-else>
      <h4>나의 컨텐츠를<br> 
        한 곳에서 관리해보세요</h4>
      <p>보관함 사용을 위해서는 로그인이 필요해요</p>
      <button type="button" @click="$router.push('/login')">로그인하기</button>
    </div>

    



  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";
import "swiper/css/navigation";
import '../assets/css/root.css';
import { Navigation } from "swiper/modules";

export default {
  data(){
    return{
      category: [
        {
          img: require('../assets/image/Rectangle98.png'),
          title: '이프온리',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle90.png'),
          title: '장화홍련',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle511.png'),
          title: '유전',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle512.png'),
          title: '판의미로',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle513.png'),
          title: '살인의 추억',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle514.png'),
          title: '데어 윌 비 블러드',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle515.png'),
          title: '에이아이',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle516.png'),
          title: '알포인트',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle516.png'),
          title: '알포인트',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
      ],
      comment: [
        {
          img: require('../assets/image/Rectangle517.png'),
          title: '겟아웃',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle49.png'),
          title: '광해',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
      
      ],
      heart: [
        {
          img: require('../assets/image/heart1.jpg'),
          title: '어서오세요. 실력주의교실에ddddddddddddddddddddddddddddddddddddddddddd',
        },
        {
          img: require('../assets/image/heart2.jpg'),
          title: '마법소녀를 동경해서',
        },
        {
          img: require('../assets/image/heart3.jpg'),
          title: '어떤아재의 VMO활동기',
        },
        {
          img: require('../assets/image/heart4.jpg'),
          title: '스파이 패밀리 시즌2',
        },
        {
          img: require('../assets/image/heart5.jpg'),
          title: '휴일에 악당',
        },
        {
          img: require('../assets/image/heart6.jpg'),
          title: '손끝과 인연',
        },
        {
          img: require('../assets/image/heart7.jpg'),
          title: '공주님 "고문"의 시간입니다',
        },
        {
          img: require('../assets/image/heart8.jpg'),
          title: '나 혼자만 레벨업',
        },
        {
          img: require('../assets/image/heart9.jpg'),
          title: '완벽한 결혼의 정석',
        },
      ],
       login: true,

    }
  },
  methods: {

  },
  created(){
    console.log(this.comment)
  },
  components: {
      Swiper,
      SwiperSlide,
  },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation],

      };
    },

};
</script>

<style scoped>

.wrap {
  color: white;
  padding: 56px 40px 0;
}
h2{
  font-size: 28px;
  font-weight: 600;
}
.evalTitle {
  margin-bottom: 70px;
}
/* evaTitle 종료 */
#section1{

}
#section2{
  margin-top: 40px;
}
#section3{
  margin-top: 40px;
}

.subTitle {
  margin-bottom: 16px;
}
.gnb {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

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

.prevImgArrow{
  position: absolute;
  left: -35px;
  display: block;
  color: red;
  z-index: 301;
}

.nextImgArrow{
  position: absolute;
  right: -35px;
  display: block;
  color: red;
  z-index: 301;
}


.imgGroup{
  /* height: 276px; */
  position: relative;
}

.texDec h1{
  font-size: 18px;
}

.imgGroup > a{
  display: block;
}
  

.imgStall{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 5px;
}

.movieName{
  color: white;
  padding-top: 8px;
  box-sizing: border-box;
  font-size: 0.75rem;
}


.container-fulid{
  position: relative;
}

.commentTitle{
  margin-bottom: 16px;
}
.row{
  /* width: 100%;
  height: 60vh;
  display: block;
  text-align: center;
  line-height: 60vh; */
  text-align: center;
  height: 40vh;
  position: relative;
}
.middle > img{
  margin-bottom: 20px;
}
.middle{
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.falseView{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  text-align: center;
  margin: 120px 0px;
}
.falseView h4{
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 26px;
  margin-top: 8px;
  margin-bottom: 6px;
  white-space: pre-wrap;
}
.falseView p{
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  text-decoration: none;
  line-height: 20px;
  color: rgb(186, 186, 193);
  margin-bottom: 32px;
}
.falseView button{
  color: rgb(255, 255, 255);
  background: var(--button-color1);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  width: 240px;
  padding: 8px 0px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;
  outline: 0;
}

.movieName > p{
  overflow: hidden;  		
  text-overflow: ellipsis;  	
  white-space: nowrap; 		
  word-break:break-all;
  width: 100%;
}


</style>
