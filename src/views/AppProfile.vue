<template>
  <div class="profile">
    <h1>프로필</h1>
    <div class="profileImage">
      <img src="../assets/image/프로필 이미지1.png" alt="" />
    </div>
    <button type="button" class="profilebtn">프로필 편집</button>
    <h2>설정</h2>
    <div class="profile-one">
      <p>계정</p>
      <span>이메일</span>
      <span> example@gmail.com</span>
      <span>이메일 변경</span>
      <p>비밀번호 변경</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
*{
  color:#fff;
}
.profile {
  margin-left: 30%;
  
}
.profile h1 {
  font-size: var(--size1);
  margin-bottom: 20px;
  font-weight: bold;
}
.profileImage {
  margin-bottom: 20px;
}
.profilebtn {
  width: 780px;
  height: 40px;
  margin-bottom: 20px;
  background-color: #565656;
  border: 0px;
  font-weight: bold;
  font-size: var(--size6);
  border-radius: 5px;
}
.profile-one{
border: 1px solid var(--button-color5);
width: 780px;
height: 130px;
border-radius: 5px;

}
h2{
  font-weight: bold;
  margin-bottom: 20px;
}
.profile-one{
  padding: 12px 20px 26px 12px;
}
.profile-one p{
  font-size: var(--size6);
  margin-bottom: 8px;

}
</style>