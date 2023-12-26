<template>
  <div class="wrap">
    <div class="row r1 g-0">
      <div class="film col-lg-7">
        <h1>이프온리</h1>
        <p class="inform i1">
          <b>15</b> · 2004년 · 1시간 35분 ·
          <a href="#" class="theme">코미디</a> ·
          <a href="#" class="theme">죽음</a>
        </p>
        <div class="expl">
          <p class="inform i2">
            눈앞에서 사랑하는 연인 사만다를 잃은 이안. 다음 날 자신의 옆에서
            자고 있는 사만다를 발견하고, 이내 정해진 운명은 바꿀 수 없단 걸
            깨달은 이안은 더 늦기 전에 자신의 진심을 전하려 한다.&nbsp;
          </p>
          <!-- //모달시작 -->
          <!--button요소를 클릭하면 popup함수가 호출-->
          <button @click="popup()">더보기</button>
          <!--modal-->
          <div id="id01" class="modal">



            <!--modal content-->
            <form class="modal-content">


              <!--입력창-->
              <div class="container">
                <!--x버튼을 클릭하면 pClose()함수 호출-->
                <span @click="pClose()" class="close">&times;</span>
                <!--required = 필수 입력창 설정-->
                <div class="top">
                  <p class="modal-name">이프온리</p>
                  <p class="modal-top">기본 정보</p>

                  <div class="modal-flex">
                    <p class="top-left">개봉연도</p>
                    <p class="top-right">2004</p>
                  </div>
                  <div class="modal-flex">
                    <p class="top-left">장르</p>
                    <p class="top-right">코미디</p>
                  </div>
                  <div class="modal-flex">
                    <p class="top-left">국가</p>
                    <p class="top-right">미국</p>
                  </div>
                  <div class="modal-flex">
                    <p class="top-left">상영시간</p>
                    <p class="top-right">1시간35분</p>
                  </div>
                  <div class="modal-flex">
                    <p class="top-left">평점</p>
                    <p class="top-right">4.0</p>
                  </div>
                  <div class="modal-flex">
                    <p class="top-left">연령등급</p>
                    <p class="top-right"><img src="../assets/image/15.png" alt="15"></p>
                  </div>
                  <hr />
                </div>
                <div class="mid">
                  <p class="modal-top">
                    줄거리
                  </p>
                </div>

              </div>




            </form>
          </div>




          <!-- 모달끝 -->
        </div>

        <div class="movie">
          <button type="button" class="watch">▶ 무료로 감상하기</button>
        </div>
        <hr />
        <h5>
          <img src="../assets/image/ticket.png" alt="" width="20px" height="20px" />왓챠 이용권이 있다면, 추가 구매 없이 무제한 감상
          가능합니다.
        </h5>
      </div>
      <div class="pic col-lg-5">
        <img src="../assets/image/ifonly.jpg" class="img-fluid" alt="" width="100%" />
      </div>
    </div>
    <div class="row r2">
      <h3>&nbsp;&nbsp;콘텐츠 정보&nbsp;&nbsp;</h3>
      <div class="col-lg-6">
        <h2>감독/출연</h2>
        <div class="row row-cols-2">
          <div class="col">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="" />
            <div class="name">
              <b><router-link to="/movie">길 정거</router-link></b>
              <h4>감독</h4>
            </div>
          </div>
          <div class="col">
            <img
              src="https://img.freepik.com/free-photo/young-asian-girl-portrait-isolated_53876-70968.jpg?w=996&t=st=1701680168~exp=1701680768~hmac=867a07a3d286bfe2cabd0bfc1ed60bd15a4361d006b5a7fb0a7c24bf519efd60"
              alt="" />
            <div class="name">
              <b>제니퍼 러브 휴이트</b>
              <h4>주연 : 사만다</h4>
            </div>
          </div>
          <div class="col">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="" />
            <div class="name">
              <b>폴 니콜스</b>
              <h4>주연 : 이안</h4>
            </div>
          </div>
          <div class="col">
            <img
              src="https://img.freepik.com/free-photo/indoor-portrait-pleased-handsome-ordinary-european-man-with-moustache-beard-smiling-broadly-feeling-confident-happy-while-making-arrangement-wedding-gray-wall_176420-22384.jpg?w=1060&t=st=1701680088~exp=1701680688~hmac=d891d057e59f00bb6d3239f0d565a6e06d8f16e46b7727e09e40746920641ea0"
              alt="" />
            <div class="name">
              <b>톰 윌킨스</b>
              <h4>조연 : 택시기사</h4>
            </div>
          </div>
          <div class="col">
            <img
              src="https://img.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-coral-pink-studio-background-with-copyspace_155003-46026.jpg?w=1060&t=st=1701680016~exp=1701680616~hmac=edebea10b1093e9ecece84e311170e12320baf97548bbf84a5ca4cbc7f4b3bae"
              alt="" />
            <div class="name">
              <b>루시 데번포트</b>
              <h4>조연 : 로티</h4>
            </div>
          </div>
          <div class="col">
            <img
              src="https://img.freepik.com/free-photo/close-up-stylish-attractive-girl-with-hairbun-smiling-looking-hopeful_176420-25550.jpg?w=1060&t=st=1701680068~exp=1701680668~hmac=703eb967170346c5b33933335774964bdacd9295d2a1fe21e0ccc7bc2035d7f0"
              alt="" />
            <div class="name">
              <b>다이아나 하드캐슬</b>
              <h4>조연 : 클레어</h4>
            </div>
          </div>
          <div class="col">
            <img
              src="https://img.freepik.com/free-photo/young-man-white-shirt-looking-camera-looking-happy_176474-83327.jpg?w=1060&t=st=1701680140~exp=1701680740~hmac=aeca0082261e8d6e8567d7017e2cd5d833785d8a90057d7173e51744a3e85a58"
              alt="" />
            <div class="name">
              <b>로빈 샘슨</b>
              <h4>단역</h4>
            </div>
          </div>
          <div class="col">
            <img
              src="https://img.freepik.com/free-photo/front-view-man-with-nose-ring_23-2149441219.jpg?w=1060&t=st=1701680209~exp=1701680809~hmac=b5f24593b94f2d2f247bb79b462d315fadc572a90793a62d3c02f9ab6ecabe70"
              alt="" />
            <div class="name">
              <b>캐빈 무어</b>
              <h4>단역</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2">
        <a class="more" href=""><router-link to="/actor">더보기</router-link></a>
      </div>
      <div class="col-lg-4 col-sm-mt-4">
        <div class="avg float-lg-end">
          <h2>나의 평점</h2>
          <form>
            <div class="rating mb-3">
              <div id="starContainer" @click="handleStarClick">
                <span v-for="star in stars" :key="star" :class="{ star: true, filled: star <= rating }"
                  :data-value="star">&#9733;</span>
                <span id="ratingText">{{ rating }}/5</span>
              </div>
              <input type="hidden" name="rating" id="rating" v-model="rating" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      stars: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    handleStarClick(event) {
      if (event.target.dataset.value) {
        this.rating = parseInt(event.target.dataset.value);
      }

    },
    popup() {
      document.getElementById("id01").style.display = "block";

    },
    pClose() {
      document.getElementById("id01").style.display = "none";
    },
    // window(e) {
    //   if (e.target == document.getElementById("id01")) {
    //     document.getElementById("id01").style.display = "none";
    //   }
    // },
  },
};



//브라우저 내에서 클릭이벤트가 발생하면 구문실행
// window.onclick = function (e) {
//console.log(e.target) 클릭한 요소
//   if (e.target == modal) {//클릭한 요소가 modal일때
//     modal.style.display = "none";
//   }
// }
</script>

<style scoped>
.wrap {
  font-family: "Noto Sans KR", sans-serif;
  color: #fff;
  user-select: none;
}

.r1 {
  background: linear-gradient(to right, #444444, #000000);
}

.film {
  padding-top: 56px;
  padding-left: 40px;
  box-sizing: border-box;
}

h1 {
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.pic {
  margin-top: 0;
  padding: 0;
}

.inform {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  color: #b3b3b3;
  padding: 8px 0;
  max-width: 500px;
}

.inform>b {
  color: #fff;
  font-size: 1rem;
  background-color: #b3b3b3;
  padding: 0 0.25rem;
}

/* .moresee {
  font-family: "Noto Sans KR", sans-serif;
  color: #fff;
  background-color: transparent;
  appearance: none;
  outline: 0;
  border: 0;
} */

.watch {
  font-family: "Noto Sans KR", sans-serif;
  background-color: #da0037;
  color: #fff;
  width: 154px;
  height: 40px;
  font-size: 16px;
  border-radius: 7px;
  border: 0;
  outline: 0;
  appearance: none;
  margin-top: 12px;
  margin-bottom: 20px;
}

.watch:hover {
  background-color: #d10035;
}

h5 {
  margin: 1.5rem 0 1.25rem 0;
  font-size: 1rem;
  font-weight: lighter;
}

h5>img {
  margin-right: 0.25rem;
}

.theme {
  color: #b3b3b3;
}

.theme:hover {
  color: #b3b3b3;
  text-decoration: underline;
}

h3 {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 2.5rem 0 52px 0;
  text-decoration: underline;
  text-underline-offset: 0.8rem;
  letter-spacing: 0.8px;
}

h2 {
  margin-top: 1rem;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.name {
  padding-left: 4px;
  box-sizing: border-box;
}

.r2 {
  margin-left: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.col {
  display: flex;
  padding-top: 1.25rem;
  box-sizing: border-box;
}

.col>img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
}

b {
  font-weight: 500;
  font-size: 20px;
  font-weight: 500;
}

h4 {
  color: #fff;
  font-size: 1rem;
  color: #b3b3b3;
}

.more {
  color: #b3b3b3;
}

.more:hover {
  color: #ededed;
}

.avg {
  margin-right: 52px;
}

#starContainer {
  background-color: #363636;
  width: 320px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.star {
  font-size: 1.75rem;
  color: #ededed;
  transition: color 0.2s;
  margin: 1.25rem 0.25rem;
}

.star:hover {
  color: #faf2ac;
}

.star.filled {
  color: #ffe70f;
}

#ratingText {
  letter-spacing: 0.3rem;
  margin: 1.5rem 0 0 2rem;
  font-size: 1.5rem;
}


/* 모달시작 */
.modal {
  /*위치고정하고 브라우저의 크기만큼 크기를 설정*/
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 60px;
  display: none;

}

/*실제 모달의 콘텐츠가 표시되는 부분*/
.modal-content {
  background-color: rgb(34, 35, 38);
  width: 600px;
  margin: auto;
  border: 1px solid #888;
  animation: zoom 0.6s;
  border-radius: 10px;
  position: relative;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1)
  }
}

.close {
  position: absolute;
  top: 0px;
  right: 25px;
  color: #b5b5b5;
  font-size: 35px;
  font-weight: bold;
}

.close:hover {
  cursor: pointer;
}

.container {
  padding: 20px;

}

.modal-name {
  font-size: 32px;
  color: #fff;
  font-weight: bold;
}

.modal-top {
  font-size: 20px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 16px;

}

.modal-flex {
  display: flex;
}

.top-left {
  width: 80px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  line-height: 36px;
}

.top-right {
  color: #babac1;
  font-size: 16px;
  margin-left: 30px;
  line-height: 36px;

}

.top-right img {
  width: 32px;
  height: 32px;
}
.top hr{
margin: 16px 0 16px 0;
}
</style>