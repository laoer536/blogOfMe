<template>
  <top-bar>
    <img slot="logo" src="../../assets/img/logo.jpg">
    <span slot="myName">Laoer</span>
    <div slot="title" class="wow fadeInRight">Home</div>
  </top-bar>
</template>

<script>
  import TopBar from "../TopBar";
  export default {
    name: "HomeTopBar",
    components: {TopBar}
  }
</script>

<style scoped>

</style>