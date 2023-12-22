<template>
  <div class="web">
    <customer-header />
    <div class="boxa">
      <h1>가입한 이메일 주소와 비밀번호를 변경하고 싶어요.</h1>
      <p>이메일 주소와 비밀번호는 아래 절차에 따라 변경하실 수 있어요.</p>
      <p>* 추가로 생성한 프로필 또는 키즈 프로필에서는 변경이 어려워요.</p>
      <ul class="box1">
        <b>[이메일 주소 변경 방법]</b>
        <li>모바일 앱: 오른쪽 상단 프로필 > 계정 > 이메일 변경</li>
        <li>PC 웹: 오른쪽 상단 프로필 > 나의 VIDIYO > 계정의 '이메일 변경'</li>
      </ul>
      <b>[비밀번호 변경 방법]</b>
      <ul class="box2">
        <li>모바일 앱: 오른쪽 상단 프로필 > 계정 > 비밀번호 변경</li>
        <li>PC 웹: 오른쪽 상단 프로필 > 나의 VIDIYO > 계정의 '이메일 변경'</li>
      </ul>
      <hr />
      <div class="information">
        <p>원하는 정보를 얻으셨나요?</p>
        <div class="yes_btn">
           <button type="button" class="btn btn-outline-dark" :class="{ 'active': yesIsActive }" @click="toggleYesActive"> 예 </button>
            <button type="button" class="btn btn-outline-dark" :class="{ 'active': noIsActive }" @click="toggleNoActive"> 아니오 </button>
        </div>
        <div class="last">
          <p>궁금하신 점은 무엇이든 문의해 주세요</p>
          <p>문의 등록</p>
        </div>
      </div>
      <hr />
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

  data() {
    return {
      yesIsActive: false,
      noIsActive: false,
    };
  },
  methods: {
    toggleYesActive() {
      if (!this.yesIsActive) {
        this.yesIsActive = true;
        this.noIsActive = false; // '예' 버튼이 눌리면 '아니오' 버튼 상태를 해제
        // '예' 버튼 클릭 이벤트 핸들링 로직 추가
      } else {
        // '예' 버튼이 이미 눌린 상태이면, 다시 클릭하면 해제
        this.yesIsActive = false;
        // '예' 버튼 클릭 해제 이벤트 핸들링 로직 추가
      }
    },
    toggleNoActive() {
      if (!this.noIsActive) {
        this.noIsActive = true;
        this.yesIsActive = false; // '아니오' 버튼이 눌리면 '예' 버튼 상태를 해제
        // '아니오' 버튼 클릭 이벤트 핸들링 로직 추가
      } else {
        // '아니오' 버튼이 이미 눌린 상태이면, 다시 클릭하면 해제
        this.noIsActive = false;
        // '아니오' 버튼 클릭 해제 이벤트 핸들링 로직 추가
      }
    },
  },
};

</script>

<style scoped>
.web {
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  line-height: 24px;
  font-style: 'Noto Sans KR';
}

.boxa {
  max-width: 600px;
  text-align: start;
  margin: auto; 
  margin-top: 60px;
  font-size: 1rem;
  font-style: 'Roboto';
}

.boxa > p:nth-child(2){
  margin-bottom: 8px;
}

h1{
  margin-bottom: 60px;
}

b {
  font-weight: bold;
}

.box1 {
  margin: 40px 0 40px 0;
}

.box2 {
  margin-bottom: 60px;
}

.information {
  text-align: center;
  margin-top: 36px;
  margin-bottom: 36px;
}

.btn {
  margin-bottom: 60px;
  font-size: 12px;
  width: 88px;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 12px;
}

.last > p:nth-child(2){
color: #da0037;
}

.last > p:nth-child(2):hover {
text-decoration: underline;
}

</style>