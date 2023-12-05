<template>
  <div class="profile">
    <h1>프로필</h1>
    <div class="profileImage">
      <img src="../assets/image/프로필 이미지1.png" alt="" />
    </div>
    <button type="button" class="profilebtn">프로필 편집</button>
    <h2>설정</h2>
    <div class="profile-one">
      <p>이용권</p>
      <span>상세정보</span>
      <span> 이용권없음</span>
      <span>이용권 구매하러 가기</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
  margin-left: 30%;
}
.profile h1 {
  color: #fff;
  font-size: var(--size1);
  margin-bottom: 20px;
}
.profileImage {
  margin-bottom: 20px;
}
.profilebtn {
  width: 780px;
  height: 40px;
  margin-bottom: 20px;
  background-color: #565656;
  color: #fff;
  border: 0px;
  font-weight: bold;
  font-size: var(--size6);
}
.profile-one{
border: 1px solid var(--button-color5);
width: 780px;
height: 130px;
}
</style>