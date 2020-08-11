<template>
  <div>
    <js-page-top-bar></js-page-top-bar>

    <js-content></js-content>

    <bottom-foot></bottom-foot>
  </div>
</template>

<script>
  import BottomFoot from '../../components/BottomFoot.vue'
  import JsPageTopBar from "../../components/content/JsPageTopBar";
  import JsContent from "../../components/content/knowledePage/JsContent";
  export default {
    name: "JsPage",
    components: {JsContent, BottomFoot,JsPageTopBar},
    created() {
      document.title  = "JS"
    }
  }
</script>

<style scoped>

</style>