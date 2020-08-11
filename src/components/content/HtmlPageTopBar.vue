<template>
  <top-bar>
    <img slot="logo" src="../../assets/img/logo.jpg">
    <span slot="myName">Laoer</span>
    <div slot="title" class="wow fadeInRight">HTML</div>
  </top-bar>

</template>

<script>
  import TopBar from "../TopBar";
  export default {
    name: "HtmlPageTopBar",
    components: {TopBar}
  }
</script>

<style scoped>

</style>