<template>
  <header>
    <div class="search">
      <input
        type="text"
        class="search-all"
        placeholder="콘텐츠, 태그, 인물, 리스트 검색 "
        @input="searchGroup"
      />
      <!--items데이터 전달-->
      <!-- <product-list :items="items" /> -->
    </div>
    <div class="login-header">
      <div class="alam">
        <img src="../assets/image/Vector.png" alt="소식함" />
      </div>
      <div class="profile">
        <img src="../assets/image/프로필 이미지.png" alt="프로필" />
      </div>
    </div>
    <div class="logout-header">
      <button type="button" class="login"><a href="#">로그인</a></button>
      <button type="button" class="join"><a href="#">회원가입</a></button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 1680px;
  height: 56px;
  background-color: #171717;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
}
.login-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  display: none;
}
.profile {
  margin: 0 40px 0 20px;
}
.logout-header {
  display: block;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  font-family: Roboto;
}

.join {
  width: 74px;
  height: 32px;
  background-color: var(--button-color1);
  color: var(--text-color3);
  font-size: 0.75rem;
  border: none;
  padding: 9px 13px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 40px 0 10px;
}
.login {
  background-color: var(--sub-color2);
  color: var(--text-color3);
  font-size: 0.75rem;
  border: none;
  width: 46px;
  height: 24px;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
}
input[type="text"] {
  width: 340px;
  height: 36px;
}
</style>