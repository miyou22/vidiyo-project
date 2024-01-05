<template>
  <div id="wrap">
    <a class="icon" @click="$router.push('/'), closeSearch()">
      <img src="../assets/image/vidiyo logo 5.png" alt="" />
    </a>
    <div class="menu">
      <ul class="gnb">
        <li id="svg"  @click="$router.push('/'), closeSearch()"  :class="{ 'on': currentRoute === '/'}">
          <span class="material-icons">home</span> 
          <span class="menu">홈</span>
        </li>
        <li id="svg" @click="$router.push('/eval'), closeSearch()" :class="{'on': currentRoute === '/eval'}">
          <span class="material-icons">star_border</span>
          <span class="menu">평가</span>
        </li>
        <li id="svg" @click="$router.push('/search'), searchView()"  :class="{'on': currentRoute === '/search'}">
          <span class="material-icons">search</span>
          <span class="menu">검색</span>
        </li>
        <li id="svg" @click="$router.push('/storage'),closeSearch()"  :class="{'on': currentRoute === '/storage'}">
          <span class="material-icons">inbox</span>
          <span class="menu">보관함</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: this.$route.path,
    };
  },
  watch: {
    '$route'(to) {
      this.currentRoute = to.path;
      console.log(this.currentRoute)
    },
  },
  methods: {
    //   isActive(e) {
    //   const btns = document.querySelectorAll("#svg");
    
    //   let target = e.currentTarget;
    //   console.log(e)
    //   for(let i = 0; i<btns.length; i++){
    //     e.stopPropagation()
    //     if(btns[i]==target){
    //       btns[i].classList.add("on");
    //     } else{
    //       btns[i].classList.remove("on");
    //     }
    //   }
    // },
    searchView() {
      this.$store.commit("searchView");
    },
    closeSearch() {
      this.$store.commit("closeSearch");
    },
  },
};
</script>

<style scoped>
#wrap {
  background-color: var(--sub-color2);
  color: var(--text-color3);
  width: 240px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  z-index: 5010;
}
.icon {
  display: block;
  margin: 24px 0 0 16px;
  cursor: pointer;
}
.icon img {
}
.gnb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
  margin-top: 3.375rem;
}
.gnb > li {
  display: flex;
  align-items: center;
  padding: 0.75rem 0.75rem;
  cursor: pointer;
  color: var(--text-color1);
  width: 100%;
}
.gnb > li:hover {
  color: var(--text-color3);
}
li img {
  margin-right: 1rem;
}
.material-icons{
  color: white;
}
li .menu{
  margin-left: 1rem;
}

.on{
  border-radius: 15px;
  background-color: #353535;
}

/* @media (max-width: 798px){
  #wrap{
    display: none;
  }
} */

</style>
