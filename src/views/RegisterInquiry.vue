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
              <div class="form1">
                 <label for="paymentCheckbox"> 결제가 되었다면 결제 내역 캡처본(문자, 메일 등)을 꼭 첨부 파일로 보내주세요.
                    <input type="checkbox" id="paymentCheckbox" v-model="attachPaymentCapture">
                  </label>
                  <div class="Explanation">
                    <label for="loginIssue">설명</label>
                    <textarea v-model="loginIssue" class="form-control" id="loginIssue" rows="3" placeholder=""></textarea>
                  </div>
                  <p>첨부파일(선택사항)</p>
                  <div class="file-upload">
                    <span class="highlight-text">파일추가</span><label for="fileInput" class="file-label"> 또는 파일을 여기에 드래그
                      <input type="file" id="fileInput" @change="handleFileUpload" style="display: none;" />
                    </label>
                    </div>
                </div>
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
  max-width: 40.625rem;
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

option { padding : 0 0 0 10px; 
}

.Explanation {
  text-align: center;
  width: 40.625rem;
  margin: auto; 
}

.Explanation label {
  text-align: left; 
  display: block; 
  margin-bottom: 10px; 
}

.file-upload {
  display: inline-block;
  border: 2px solid #ddd; /* 네모칸 테두리 스타일 */
  padding: 10px;
  cursor: pointer;
  width: 100px;
}

.file-label {
  color: #7C7B84; /* 네모칸 내 글씨 색상 */
  display: block;
  text-align: center;
}

.highlight-text {
  color: #DA0037; /* '파일추가' 글씨 색상 */
}



@keyframes formopen {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


</style>

