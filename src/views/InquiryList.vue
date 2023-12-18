<template>
  <div class="web">
    <customer-header />
    <div class="text">
      <h1>문의내역</h1>
      <p>문의하신 내용은 고객센터에서 확인 후 영업일 기준 1~3일 이내에 답변 드리도록 하겠습니다.</p>
      <p>* 운영 시간: 평일 10:00 ~ 18:00 (주말, 공휴일 제외)</p>
      <div class="box">
        <p>검색된 요청이 없습니다.</p>
      </div>
      <br/>
    </div>
    <customer-footer />
  </div>
  
</template>

<script>
import CustomerHeader from "../components/CustomerHeader.vue"
import CustomerFooter from "../components/CustomerFooter.vue"

export default {
  name: "HelloWorld",
  components:{
    CustomerHeader, CustomerFooter
  },
  props: {
    msg: String,
  },
};
</script>


<style>
.web {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: #f5f5f5;
}

.text {
  height: 620px;
  max-width: 612px;
  margin: auto;
  text-align: start;
}

h1{
  padding-top: 3.75rem;
  padding-bottom: 1.25rem;
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 36px;
  
}

p {
  font-family: "Noto Sans KR";
  line-height: 20px;
  font-size: 16px;
}

.box {
  margin-top: 20px;
  color: #7C7B84;
}
</style>