<template>
  <div>
    <vue-page-top-bar></vue-page-top-bar>

    <vue-content></vue-content>

    <bottom-foot></bottom-foot>
  </div>
  
</template>

<script>
  import BottomFoot from '../../components/BottomFoot.vue'
  import VuePageTopBar from "../../components/content/VuePageTopBar";
  import VueContent from "../../components/content/knowledePage/VueContent";
  export default {
    name: "VuePage",
    components: {VueContent, VuePageTopBar,BottomFoot},
    created() {
      document.title  = "Vue"
    }
  }
</script>

<style scoped>

</style>