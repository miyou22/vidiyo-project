<template>
  <div class="container-fluid">
    <div class="header-header">
      <img src="../assets/vidiyo logo 5.png" alt="" />
      <div class="header-login">
        <p>로그인</p>
      </div>
    </div>
    <h1>회원가입</h1>
    <form>
      <input type="text" class="login id" placeholder="이름" />
      <br />
      <input
        type="text"
        class="login email"
        placeholder="이메일(example@gmail.com)"
      />
      <br />
      <input
        type="password"
        class="login pw"
        placeholder="비밀번호(영어,숫자,특문 중 2개 이상 조합 10자리 이상)"
      />
      <br />
      <div class="terms">
        <label v-for="checkbox in checkbox" :key="checkbox">
          <input class="checkbox" type="checkbox" />{{ checkbox.txt }} <br />
        </label>
      </div>
    </form>
    <header-footer />
  </div>
</template>

<script>
import HeaderFooter from "../components/HeaderFooter.vue";
export default {
  components: { HeaderFooter },
  data() {
    return {
      checkbox: [
        {
          txt: "전체약관에 동의합니다",
        },
        {
          txt: "만 14세 이상입니다.",
        },
        {
          txt: "(필수) vidiyo서비스 이용약관",
        },
        {
          txt: "(필수) 개인 정보 수집 및 이용 동의",
        },
        {
          txt: "(필수) 신작 알림 이벤트 정보 수신",
        },
      ],
    };
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
.container-fluid {
  outline: 1px solid red;
  width: 100%;
  height: 1080px;
  background: #444 url(../assets/image\ 25.png) center/cover;
  background-blend-mode: overlay;
  position: relative; 
}
.container-fluid img {
  margin: 20px 0 0 28px;
}
.container-fluid h1 {
  text-align: center;
  color: #fff;
  margin: 110px 0 36px 0;
}
.header-header {
}
.header-login {
  width: 60px;
  height: 24px;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  position: absolute;
  top: 20px;
  right: 28px;
}
form {
  text-align: center;
}
.login {
  width: 400px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #da0037;
}

.terms {
  width: 400px;
  text-align: left;
}
.terms > label {
  color: #b5b5b5;
  display: block;
}
.checkbox {
  margin-right: 20px;
}
</style>