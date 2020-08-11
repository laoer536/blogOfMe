<template>
  <div>
    <css-page-top-bar></css-page-top-bar>

    <css-content></css-content>
    <bottom-foot></bottom-foot>
  </div>
</template>

<script>
  import BottomFoot from '../../components/BottomFoot.vue'
  import CssPageTopBar from "../../components/content/CssPageTopBar";
  import CssContent from "../../components/content/knowledePage/CssContent";
  export default {
    name: "CssPage",
    components: {CssContent, BottomFoot,CssPageTopBar},
    created() {
      document.title  = "CSS"
    }
  }
</script>

<style scoped>

</style>