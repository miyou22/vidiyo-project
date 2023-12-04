<template>
  <div>
      <app-header />
      <SideBar />
      <router-view />
      <search-main />
  </div> 
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import SideBar from "./components/SideBar.vue"

export default {
  components: { AppHeader, SideBar },
};
</script>
<style>
@import "./assets/css/font.css";
@import "./assets/css/reset.css";


</style>
