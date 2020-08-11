<template>
  <top-bar>
    <img slot="logo" src="../../assets/img/logo.jpg">
    <span slot="myName">Laoer</span>
    <div slot="title" class="wow fadeInRight">CSS</div>
  </top-bar>
</template>

<script>
  import TopBar from "../TopBar";
  export default {
    name: "CssPageTopBar",
    components: {TopBar}
  }
</script>

<style scoped>

</style>