<template>
  <main>
    <div class="btn-wrap">
      <div class="btnGroup" @click="isActive">
        <button type="button" class="on">인기</button>
        <button type="button">영화</button>
        <button type="button">인물</button>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  data(){

  },
  methods: {
    isActive(e) {
      const btns = document.querySelectorAll(".btnGroup>button");
      const targetEl = e.target;
      for (let i = 0; i < btns.length; i++) {
        if (btns[i] == targetEl) {
          btns[i].className = "on"; 
          // this.product = this.products[i]; < 영화리스트
        } else {
          btns[i].className = "";
        }
      }
    },
  },
};
</script>

<style scoped>

.btnGroup {
  display: flex;
  margin-left: 40px;
}
button {
  outline: 0;
  width: 70px;
  padding-bottom: 16px;
  color: #7c7b84;
  text-align: center;
  font-size: var(--size4);
  border: 0;
  background-color: inherit;
}
button:hover {
  color: white;
}
button.on {
  color: #fff;
  border-bottom: 2px solid #fff;
}
</style>