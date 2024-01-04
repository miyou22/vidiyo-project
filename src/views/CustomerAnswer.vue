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
      <hr style="margin-top: 2rem;" />
      <div class="information">
        <p>원하는 정보를 얻으셨나요?</p>
        <div class="yes_btn">
          <button
            type="button"
            class="btn btn-outline-dark"
            :class="{ 'active': yesIsActive }"
            @click="toggleYesActive"
          >
            예
          </button>
          <button
            type="button"
            class="btn btn-outline-dark"
            :class="{ 'active': noIsActive }"
            @click="toggleNoActive"
          >
            아니오
          </button>
        </div>
        <div class="last">
          <p>궁금하신 점은 무엇이든 문의해 주세요</p>
          <div class="last_1">
            <router-link to="/inlist" class="custom-link"
              ><p>문의 등록</p></router-link
            >
            <p>|</p>
            <router-link to="/registeri" class="custom-link"
              ><p>문의 내역</p></router-link
            >
          </div>
          <hr style="margin-top: 2rem;" />
        </div>
      </div>
    </div>
    <customer-footer class="customer-footer" />
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
        this.noIsActive = false;
      } else {
        this.yesIsActive = false;
      }
    },
    toggleNoActive() {
      if (!this.noIsActive) {
        this.noIsActive = true;
        this.yesIsActive = false;
      } else {
        this.noIsActive = false;
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
  line-height: 1.5;
  font-family: 'Noto Sans KR', sans-serif;
  overflow: auto;
}

.boxa {
  max-width: 600px;
  text-align: start;
  margin: auto;
  margin-top: 60px;
  font-size: 1rem;
  font-style: 'Roboto';
  padding: 0 20px; /* 좌우 패딩 추가 */
  box-sizing: border-box; /* 패딩을 포함한 크기 계산 */
}


.boxa > p:nth-child(2) {
  margin-bottom: 0.5rem;
}

h1 {
  margin-bottom: 3.75rem;
}

b {
  font-weight: bold;
}

.box1 {
  margin: 2.5rem 0 2.5rem 0;
}

.box2 {
  margin-bottom: 3.75rem;
}

.information {
  text-align: center;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
}

.btn {
  margin-bottom: 3.75rem;
  font-size: 0.75rem;
  width: 5.5rem;
  border-radius: 0.3125rem;
  margin-left: 0.625rem;
  margin-top: 0.75rem;
}

.last_1 {
  text-align: center;
  display: flex;
  justify-content: center;
}

.last_1> p:nth-child(1),
.last_1> p:nth-child(3) {
  color: #da0037;
  margin-right: 1.25rem;
}

.last_1> p:nth-child(2) {
  margin-right: 1.25rem;
}

.last_1 > p:nth-child(1):hover,
.last_1 > p:nth-child(3):hover {
  text-decoration: underline;
}

.custom-link {
  color: #da0037;
  text-decoration: underline;
  margin-right: 1.25rem;
}

.custom-link:hover {
  text-decoration: none;
}

.last hr:last-child {
  margin-bottom: 13rem;
}

.customer-footer {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
}

.box1 li,
.box2 li {
  list-style-type: disc;
  margin-bottom: 0.5rem;
  margin-left: 2.5rem;
  margin-top: 0.625rem;
}

.yes_btn {
  text-align: center;
  margin-top: 0.75rem;
}

.yes_btn button {
  margin-left: 0.625rem;
}

.yes_btn button:last-child {
  margin-right: 0.625rem;
}
</style>