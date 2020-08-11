<template>
  <div>
    <html-page-top-bar></html-page-top-bar>

    <html-content></html-content>  <!--之后需要替换为HTMLpagecontent组件   将pagebase引用在HTMLpagecontent组件中-->

    <bottom-foot></bottom-foot>
  </div>
</template>

<script>
  import BottomFoot from '../../components/BottomFoot.vue'
  import HtmlPageTopBar from "../../components/content/HtmlPageTopBar";
  import HtmlContent from "../../components/content/knowledePage/HtmlContent";
  export default {
    name: "HtmlPage",
    components: {
      HtmlContent,
      HtmlPageTopBar,
      BottomFoot
    },
    created() {
      document.title  = "HTML"
    }
  }
</script>

<style scoped>

</style>