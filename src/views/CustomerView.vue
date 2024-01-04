<template>
  <div class="web">
    <customer-header />
    <div class="box_a">
      <div class="gnb">
        <h1>어떤 도움이 필요하세요?</h1>
        <div class="search">
          <div class="icon">
            <img src="../assets/image/search2.jpg" @click="$router.push('/customerand')">
          </div>
          <input class="search-bar__input" type="search" placeholder="검색">
        </div>
      </div>
      <div class="info">
        <div class="box">
          <ul class="grid">
            <ul v-for="(items, category) in categories" :key="category" :class="[category === 'form_a' || category === 'form_b' ? 'form' : '']">
              <li v-for="item in items" :key="item">
                <button class="button" @click="$router.push(getRoute(item))">{{ item }}</button>
              </li>
            </ul>
          </ul>
        </div>
        <div class="question">
          <h2>자주 묻는 질문</h2>
          <ul class="list">
            <div v-for="item in ['애플 결제로 결제가 되었는데 이용권이 없다고 나와요.', '구글 플레이로 결제가 되었는데 이용권이 없다고 나와요.']" :key="item" class="one">
              <li>{{ item }}</li>
            </div>
          </ul>
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
  components: { CustomerHeader, CustomerFooter },
  props: { msg: String },
  data() {
    return {
      categories: {
        form_a: ['계정관리', '사용문의', '콘텐츠', '이용권 구독 해지'],
        form_b: ['결제 및 이용권', '쿠폰', '환불', '재생 및 사용 오류'],
      },
    };
  },
  methods: {
    redirectToCustomerList(item) {
      switch (item) {
        case '계정관리':
          this.$router.push('/customorlist');
          break;
        // 다른 버튼에 대한 처리도 추가
        default:
          break;
      }
    },
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
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: auto;
}

.box_a {
  max-width: 48.75rem;
  /* height: 910px; */
  margin: auto;
  
}

input {
  font-size: 1rem;
  width: 32.8125rem;
  border-radius: 1.25rem;
  padding: 0.75rem 3.125rem;
  float: Left;
}

input:focus {outline: 2px solid #d50000;} /* outline 테두리 속성 수정 */
input:focus {outline: none;} /* outline 테두리 없애기 */

.gnb h1 {
  text-align: start;
  width: 32.875rem;
  margin-left: 7.875rem;
  padding: 60px 0 12px 0;
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 32px;
}

h2 {
  font-family: "Noto Sans KR";
  font-size: 24px;
  text-align: left;
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
}

.search {
  position: relative;
  width: 526px;
  height: 46px;
  margin: 20px auto 1.75rem auto;
  outline: 1px solid black;
  border-radius: 20px;
}

.search-bar__input {
  background-color: transparent;
}

.icon {
  position: absolute; 
  display: flex;
  bottom: 14px;
  left: 10px;
  margin: 0;
  padding: 0 8px;
}


ul {
  list-style: none;
  font-family: 'Noto Sans KR', sans-serif;
}


.grid {
  display: flex;
}

.list {
  display: flex;
  height: 61px;
  margin-bottom: 7.6875rem;
}
.list > .one {
  border-bottom: 1px solid #C1A2A2;
  padding-bottom: 0.75rem;
}

.list > .two,.three {
  margin-left: 36px;
  border-bottom: 1px solid #C1A2A2;
  padding-bottom: 0.75rem;
}

.form_a,
.form_b {
  margin:  20px; /* 양쪽 여유 너비 설정 */
}


button {
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  width: 380px;
  height: 68px;
  box-shadow: 5px 5px 15px rgb(209, 209, 209);
  border-radius: 5px;
  margin: 10px 0;
  font-size: 24px;
}

a {
  text-decoration: none;
  color: black;
  padding: 0;
  margin: 0;
  display: block;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center; 
  justify-content: center; 
}

li > .button:hover {
  color: #da0037;
}
a:hover {
  color: #da0037;
}

.one:hover {
  text-decoration: underline;
}
.two:hover {
  text-decoration: underline;
}

.three:hover {
  text-decoration: underline;
}



</style>
