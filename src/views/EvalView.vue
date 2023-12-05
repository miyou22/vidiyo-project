<template>
  <div class="warp">
    <div class="evalTitle">
      <h2>평가</h2>
    </div>

    <section id="contents">
      <h1>나의 별점 영화</h1>
      <div class="imgWrap">
        <!-- this.items에 담겨 있는 데이터를 v-for를 이용하여 순차적으로 요소를 추가하여 넣어준다. 이때 이미지의 src값을 데이터의 path값으로 할당하여 이미지를 표시 -->
        <!-- box를 클릭하면 modalView라는 메서드가 호출됨 -->
        <!--  -->
        <article class="box" v-for="item in category" :key="item">
          <div class="imgCover">
            <img :src="item.img" />
            <div class="eye"></div>
          </div>
        </article>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  category: [
        {
          img: require('../assets/image/Rectangle49.png'),
        },
        {
          img: require('../assets/image/Rectangle90.png'),
        },
        {
          img: require('../assets/image/Rectangle511.png'),
        },
        {
          img: require('../assets/image/Rectangle512.png'),
        },
        {
          img: require('../assets/image/Rectangle513.png'),
        },
        {
          img: require('../assets/image/Rectangle514.png'),
        },
        {
          img: require('../assets/image/Rectangle515.png'),
        },
        {
          img: require('../assets/image/Rectangle516.png'),
        },
        {
          img: require('../assets/image/Rectangle517.png'),
        },
        {
          img: require('../assets/image/Rectangle518.png'),
        },
      ],
}
</script>

<style>
.warp{
  color: white
}
.evalTitle{
  margin-bottom: 70px;
}
.imgWrap{
  display: grid;
  width: 100%;
  height: 1000px;
}
.box{
  width: 100%;
  height: 100%;
}
.imgCover{
  background-color: red;
  grid-template-columns: repeat(8, 1fr);
}
</style>