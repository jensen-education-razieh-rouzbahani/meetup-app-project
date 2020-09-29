<template>
  <div id="app">
    <div id="nav">
      <NavigationPage />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage";
export default {
  name: "App",
  components: {
    NavigationPage,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  width: 1400px;
  min-height: 600px;
  background: linear-gradient(
      180deg,
      #00202d 0%,
      rgba(18, 129, 89, 0.67) 68.75%,
      rgba(169, 241, 206, 0) 100%
    ),
    #e8e8e8;
  mix-blend-mode: normal;
  box-sizing: border-box;
  backdrop-filter: blur(4px);
  margin: 0 auto;
}
</style>

<style scoped>
</style>
