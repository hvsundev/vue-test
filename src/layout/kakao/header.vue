<template>
  <div>
    <header ref="header" class="kakao-header">
      <button class="hamburger" @click.prevent="showCategory"></button>
      <router-link to="/kakao/">
        <h1 class="logo"></h1>
      </router-link>
      <button class="search"></button>
    </header>
    <kakao-category @update="update" :visible.sync="isShow" />
  </div>
</template>

<script>
import KakaoCategory from "@/components/page/kakao/category";

export default {
  name: "header",
  components: { KakaoCategory },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    update(visible) {
      this.isShow = visible;
    },
    showCategory() {
      this.isShow = true;
      if (this.isShow) {
        document.body.classList.add("not-scroll");
      }
    },
  },
};
</script>

<style scoped></style>
