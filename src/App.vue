<template>
  <div class="">
    <div class="exip">
      <app-header />
      <SideBar />
      <search-main />
      <AppMain />
    </div>
  </div> 
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import SideBar from "./components/SideBar.vue"
import AppMain from "./components/AppMain.vue";

export default {
  components: { AppHeader, SideBar, AppMain },
};
</script>
<style>
@import "./assets/css/font.css";
@import "./assets/css/reset.css";

.exip{
  display: flex;
  flex-direction: column;
  padding: 56px 0 0 240px;
}
</style>
