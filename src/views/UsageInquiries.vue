<template>
  <div class="web">
    <customer-header />
    <div class="boxa">
      <div class="number1">
        <a href="#"><h1>재생 및 지원 기기</h1></a>
        <p><a href="#" @click="$router.push('/answer')">감상 가능한 PC 웹 브라우저를 알려주세요.</a></p>
        <p><a href="#">웹툰 감상이 가능한 기기는 무엇인가요?</a></p>
        <p><a href="#">TV로 감상 가능한 기기는 무엇인가요?</a></p>
        <p><a href="#">다중 자막으로 감상할 수 있나요?</a> </p>
        <p><a href="#">동시 시청이 가능한가요?</a></p>
      </div>
      <div class="step1"><p><a href="#">문서 9개 더보기</a></p></div>
      <div class="number2">
        <h1><a href="#">콘텐츠 다운로드</a></h1>
        <p><a href="#">PC 웹에서도 콘텐츠 다운로드가 가능한가요?</a></p>
        <p><a href="#">콘텐츠 다운로드 시 화질은 어떻게 설정하나요?</a></p>
        <p><a href="#">다운로드한 콘텐츠는 언제까지 볼 수 있나요?</a></p>
        <p><a href="#">다운로드 횟수 및 재생에 제한이 있나요?</a></p>
        <p><a href="#">다운로드가 되지 않아요.</a></p>
      </div>
      <div class="number3">
        <a href="#"><h1>기타</h1></a>
        <p><a href="#">구매한 콘텐츠는 어디서 확인할 수 있나요?</a></p>
        <p><a href="#">콘텐츠 대여 기간을 연장할수 있나요?</a></p>
        <p><a href="#">구매한 개별 콘텐츠를 다른 계정으로 옮기고 싶어요.</a></p>
        <p><a href="#">한국에서 이용권을 구매하면 일본에서도 서비스를 이용할 수 있나요?</a></p>
        <p><a href="#">이어보기 메뉴가 안 보여요.</a></p>
        <p><a href="#">다 본 콘텐츠는 어떻게 확인 및 삭제할 수 있나요?</a></p>
      </div>
      <div class="step2"><p><a href="#">문서 13개 더보기</a></p></div>
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

.step2{
  padding-bottom: 220px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.step1, .step2 {
  text-decoration: none;
  
  color: #da0037;
}
</style>
