<template>
  <div class="web">
    <customer-header />
    <div class="box_a">
      <div class="box_b">
        <div class="text">
          <h1>문의등록</h1>
          <p>
            문의하신 내용은 고객 센터에서 확인 후 영업일 기준 1~3일 이내에 답변
            드리도록 하겠습니다. <br />*운영 시간: 평일 10:00 ~ 18:00 (주말,
            공휴일 제외)
          </p>
        </div>
        <div class="id_management">
          <p>아래에서 문의 유형을 선택해 주세요.</p>
          <sapn>
            <select v-model="selectedType" class="form-select" aria-label="Default selexample">
              <option value="-">-</option>
              <option value="1">로그인/계정관리</option>
              <option value="2">쿠폰</option>
              <option value="3">콘텐츠</option>
              <option value="4">환불</option>
              <option value="5">해지</option>
              <option value="6">결제</option>
              <option value="7">재생 및 사용오류</option>
              <option value="8">VIDIYO에 제안하기</option>
              <option value="9">사용문의</option>
            </select>
          </sapn>
          <section class="form__container" :class="{ 'show': selectedType !== '-' }">
            <!-- 추가적인 폼 요소들을 여기에 추가할 수 있습니다. -->
            <div v-if="selectedType === '1'">
              <!-- 로그인/계정관리 폼 -->
              <!-- 예시: -->
              <label for="loginIssue">로그인/계정 문제 설명:</label>
              <textarea v-model="loginIssue" class="form-control" id="loginIssue" rows="3" placeholder="로그인/계정 문제를 설명해주세요"></textarea>
            </div>
            <div v-else-if="selectedType === '2'">
              <!-- 쿠폰 폼 -->
              <!-- 예시: -->
              <label for="couponIssue">쿠폰 관련 문의:</label>
              <textarea v-model="couponIssue" class="form-control" id="couponIssue" rows="3" placeholder="쿠폰 관련 문의를 적어주세요"></textarea>
            </div>
            <!-- 다른 문의 유형에 대한 폼을 추가할 수 있습니다. -->
          </section>
        </div>
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
  data() {
    return {
      selectedType: '-',
      loginIssue: '',
      couponIssue: '',
      // 다른 유형에 대한 데이터도 추가할 수 있습니다.
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

.web {
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.box_b {
  margin: auto;
  justify-content: center;
  margin-top: 4rem;
  text-align: center;
}

h1 {
  font-style: "Noto Sans";
  line-height: 20px;
  font-size: 36px;
  margin-bottom: 20px;
}

.id_management > p {
  margin-top: 20px;
}

.form-select {
  max-width: 48.75rem;
  height: 3.125rem;
  font-size: 16px;
  border-radius: 5px;
  margin: auto;
}

.form__container {
	display: none;
	opacity: 0;
}

.form__container.show {
	display: block;	
	opacity: 1;
	animation: formopen;
	animation-duration: 0.5s;
}

@keyframes formopen {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

option { padding : 0 0 0 10px; 
}
.id_management span{
  
}

</style>

