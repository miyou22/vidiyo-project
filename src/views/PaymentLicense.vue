<template>
  <div class="web">
    <customer-header />
    <div class="boxa">
      <div class="number1">
        <a href="#"><h1>결제</h1></a>
        <p><a href="#" @click="$router.push('/answer')">애플 결제로 결제가 되었는데 이용권이 없다고 나와요.</a></p>
        <p><a href="#">VIDIYO 캐시로 정기 이용권을 구독할 수 있나요?</a></p>
        <p><a href="#">모바일 앱에서는 VIDIYO 캐시로만 콘텐츠 구매가 가능한가요?</a></p>
        <p><a href="#">콘텐츠 구매는 어디서 할 수 있나요?</a></p>
        <p><a href="#">개별 콘텐츠를 구매하면 이후에 자동으로 정기 이용권이 결제되나요?</a></p>
      </div>
      <div class="number2">
        <h1><a href="#">이용권 소개</a></h1>
        <p><a href="#">VIDIYO 이용권을 구매하면 어떤 서비스를 받을 수 있나요?</a></p>
        <p><a href="#">프리미엄 이용권과 베이직 이용권의 차이는 무엇인가요?</a></p>
      </div>
      <div class="number3">
        <a href="#"><h1>이용권 변경</h1></a>
        <p><a href="#">이용권 갱신일이 줄어들었어요.</a></p>
        <p><a href="#">다른 개월 수(1, 3, 6, 12개월)의 이용권으로 어떻게 변경하나요?</a></p>
        <p><a href="#">프리미엄 이용권으로 변경이 안돼요.</a></p>
      </div>
      <div class="number4">
        <a href="#"><h1>프리미엄 이용권</h1></a>
        <p><a href="#">프리미엄 이용권 구독 시 몇 명까지 동시 재생이 가능한가요?</a></p>
        <p><a href="#">프리미엄 이용권을 해지하면 추가 생성된 프로필의 정보는 모두 삭제되나요?</a></p>
        <p><a href="#">프리미엄 이용권 구독 시 각각의 프로필에서 감상 내역 삭제가 가능한가요?</a></p>
        <p><a href="#">프리미엄 이용권 구독 시 프로필은 몇 개까지 만들 수 있나요?</a></p>
        <p><a href="#">프리미엄 이용권 구독 시 프로필 마다 각각 본인 인증을 할 수 있나요?</a></p>
      </div>
    </div>
    <customer-footer />
  </div>
</template>

<script>
import CustomerHeader from "../components/CustomerHeader.vue";
import CustomerFooter from "../components/CustomerFooter.vue";

export default {
  name: "HelloWorld",
  components: {
    CustomerHeader,
    CustomerFooter,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  margin: auto;
  border-style: none;
}

.web {
  position:absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 118.125rem;
  background-color: #f5f5f5;
}

.boxa {
  max-width: 780px;
  margin: auto;
  text-align: start;
  padding-left: 20px; 
  padding-right: 20px; 
  overflow-y: hidden;
}

h1 {
  padding-left: 4px;
  font-family: "Noto Sans KR";
  font-weight: bold;
  margin-left: 4px;
  padding-top: 70px;
  font-size: 36px;
  margin-bottom: 10px;
}

p {
  font-family: "Roboto";
  border-bottom: 1px solid #c1a2a2;
  padding: 12px;
  line-height: 30px;
  font-size: 16px;
}

.step{
  padding-bottom: 100px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.box > .number4 > p {
  text-decoration: none;
  color: #da0037;
}
</style>
