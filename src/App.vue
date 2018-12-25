<template>
  <div class="app-wrapper">
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import MainContent from './components/MainContent.vue';
import Footer from './components/footer.vue';
import Other from './components/other';

export default {
  components: {
    Header,
    MainContent,
    Footer
  }
};
</script>
<style lang="scss">
  @import "./sass/main";
</style>